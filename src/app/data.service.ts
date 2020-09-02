import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './users.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get(environment.apiUrl)
  }
}
