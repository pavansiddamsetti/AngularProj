import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
BASE_URL="http://localhost:9090/api/v1/digitalbooks";


  constructor(private http:HttpClient) { }


  createUser(user: {name:string , age: number}):Observable<any>{
return this.http.post(this.BASE_URL,user);
  }

  signUp(user: {username: string, email: string,role: string[],password: string }):Observable<any>{
return this.http.post(this.BASE_URL+"/signup",user);
  }

  signIn(user: {username: string, password: string}){
return this.http.post(this.BASE_URL+"/signin",user);
  }
}


