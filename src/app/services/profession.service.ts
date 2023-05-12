import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/environments/ApiPaths';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
  baseURL =(environment as any).baseUrl;

  constructor(private _http: HttpClient) { }

  getAllProfession(): Observable<any> {
    return this._http.get<JSON>(`${this.baseURL}${ApiPaths.Profession}`)
  }
  
}
