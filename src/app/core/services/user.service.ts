import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/environments/ApiPaths';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL =(environment as any).baseUrl;
   
  constructor(private _http: HttpClient,private router : Router) { } 
  login(body : any,header : any): Observable<any>{
    return this._http.post<JSON>(`${this.baseURL}${ApiPaths.User}/login`,body,header)
  }
  logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(['login']);
  }

  register (body: any, header: any) : Observable<any>{
    return this._http.post<JSON>(`${this.baseURL}${ApiPaths.User}/register`,body, header);
  }
}
