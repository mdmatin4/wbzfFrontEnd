import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthenticatedResponse } from 'src/app/core/models/authenticated-response.model';
import { formOptions } from 'src/app/core/services/password.validator';
import { UserService } from 'src/app/core/services/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';


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
  valCheck: string[] = ['remember'];
  invalidLogin: boolean=true;
  companyName : string=(environment as any).companyName;
  registrationForm!: FormGroup;
  msgs1!: Message[];
  constructor(
    public layoutService: LayoutService, 
    private fb: FormBuilder,
    private _user: UserService,
    private router: Router
    ) { 
  }

  ngOnInit(){

    this.registrationForm=this.fb.group({
      fullName: ['', [Validators.required,Validators.minLength(3)]],
      motherName: ['', [Validators.required]],
      password : [''],
      confirmPassword: [''],
      mobileNo: ['', Validators.required],
      emailId: [''],
      professionId : [''],
    },formOptions )
    
  }
  
  public onSubmit( f : any){
    // reset alerts on submit



    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    const body = {
      userName: f.value.userName,
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
