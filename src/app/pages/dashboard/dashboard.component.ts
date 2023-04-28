import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

 constructor(
  private userservice : UserService, private jwtHelper : JwtHelperService
 ) { }

 ngOnInit(): void {
}

 isUserAuthenticated = (): boolean => {
  const token = localStorage.getItem("jwt");
  if (token && !this.jwtHelper.isTokenExpired(token)){
    return true;
  }
  return false;
}

 logout(){
  this.userservice.logOut();
 }
}
