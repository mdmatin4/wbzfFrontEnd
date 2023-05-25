import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/environments/ApiPaths';
import { environment } from 'src/environments/environment';
import { loginChart } from '../models/loginChart';



@Injectable({
  providedIn: 'root'
})
export class SupersetAuthServicesService {
  baseURL =(environment as any).baserUrl_superset;
  private _loginChart: loginChart= {access_token:"",refresh_token:""};

  constructor(private http: HttpClient) {
    
   }
  
   login()   {  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      username: "admin",
      password: "admin",
      provider: "db",
      refresh: true,
    
    };
    this.http.post<JSON>(`${this.baseURL}/security/login`,body,{headers:headers}).toPromise().then(
          (response: any) => {
            
              this._loginChart.access_token=response.access_token;
              this._loginChart.refresh_token=response.refresh_token;
       
             
              localStorage.setItem("access_token", response.access_token);
               localStorage.setItem("refresh_token",response.refresh_token); 
            })
            .catch( (err: HttpErrorResponse) => {
              console.log(err);
            } 
    );
  }
  
  

  refreshAccessToken(refreshToken: string) : string |any {
    
    const requestOptions = {
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${refreshToken}`
      }
    };

    this.http.post<any>(`${this.baseURL}/security/refresh`, {}, requestOptions)
      .toPromise()
      .then(response => {
        // Update the tokens with the new access token and refresh token received from the backend
        return response.access_token;
      })
      .catch(error => {
        console.error('Failed to refresh access token:', error);
        throw error;
      });
  }


  checkTokenValidity(tokenFromFronEnd: string): boolean {
    // Calculate the remaining time before token expiration
    const tokenExpirationTime = this.getExpirationTimeFromToken(tokenFromFronEnd);
    const currentTime = Date.now() / 1000; // Convert to seconds
    const timeUntilExpiration = tokenExpirationTime - currentTime;

    // Check if token is about to expire within a threshold time (e.g., 5 minutes)
    const thresholdTime = 5 * 60; // 5 minutes
    return timeUntilExpiration <= thresholdTime;
  }


  private getExpirationTimeFromToken(tokentoCheckExpiration : string): number {
    // Extract and parse the expiration time (exp) from the token
    const tokenParts = tokentoCheckExpiration.split('.');
    if (tokenParts.length === 3) {
      const tokenPayload = JSON.parse(atob(tokenParts[1]));
      return tokenPayload.exp;
    }
    return 0;
  }
}
