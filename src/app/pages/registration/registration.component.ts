import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthenticatedResponse } from 'src/app/core/models/authenticated-response.model';
import { formOptions } from 'src/app/core/services/password.validator';
import { UserService } from 'src/app/core/services/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProfessionService } from 'src/app/services/profession.service';
import { environment } from 'src/environments/environment';

interface profession {
  name: string;
  value : string 
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [`
  :host ::ng-deep .pi-eye,
  :host ::ng-deep .pi-eye-slash {
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
  }
`]
})

export class RegistrationComponent {
  invalidLogin: boolean=true;
  companyName : string=(environment as any).companyName;
  donorRegistrationText : string= (environment as any).donorRegistrationText;
  registrationForm!: FormGroup;
  msgs1!: Message[];
  professionList: profession[]=[];

  registrationSuccess : Boolean=false;
  constructor(
    public layoutService: LayoutService, 
    private fb: FormBuilder,
    private _user: UserService,
    private router: Router,
    private _profession : ProfessionService
    ) { 
  }

  ngOnInit(){

    this._profession.getAllProfession().subscribe({
      next: (data: any) => {
       data.data.forEach((element: any) => {
        var newProfessioin: profession = {name: element.name, value: element.id}
       
        this.professionList.push(newProfessioin)
       });
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })

    this.registrationForm=this.fb.group({
      full_name: ['', [Validators.required,Validators.minLength(3)]],
      motherName: ['', [Validators.required]],
      password : ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobileNo: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(9),Validators.maxLength(10)]],
      email: ['',Validators.email],
      professionId : ['', Validators.required],
      Gender: ['', Validators.required],
    },formOptions )
    
    this.msgs1 = [];
    
  }
  
  public onSubmit( f : any){
    // reset alerts on submit
    

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const registrationBody={
      full_name: f.value.full_name,
      motherName: f.value.motherName,
      password: f.value.passWord,
      mobileNo : f.value.mobileNo,
      emailId: f.value.email,
      professionId : f.value.professionId,
      Gender : f.value.Gender
    }
    
    this._user.register(registrationBody,headers).subscribe({
      next: (data : any)=> {
        if(data.status){
          this.registrationSuccess=true;
        }
        else{
          this.registrationSuccess=false;
          this.msgs1 =[ {severity:'error', detail:data.data}];
        }
        
      },
      error: (err: HttpErrorResponse)=> {
        this.registrationSuccess=false;
        console.log(err)
        this.msgs1 =[ {severity:'error', detail:err.message}];

      }
    }
    )
    if(this.registrationSuccess){
      const body = {
        userName: f.value.mobileNo,
        passWord: f.value.password
      };
      this._user.login( body, headers).subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          const returnUrl =  '/';
          this.router.navigate([returnUrl]);
        },
        error: (err: HttpErrorResponse) => {
          this.invalidLogin = true,
          console.log(err);
          this.msgs1=[ {severity:'error', detail:err.error.status=='401'?'Username or Password is Wrong':'Something wrong'}]
        }
      });
    }
    
   }
 
}
