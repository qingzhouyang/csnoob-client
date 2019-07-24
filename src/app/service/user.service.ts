import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getUser(): Observable<any>{
  //   console.log("got user");
  //   return this.http.get<User[]> ('http://localhost:8080/user'); //this http address depends on backend
  // }

  // deleteUser(id: number): Observable<any>{
  //   console.log("delete user");
  //   return this.http.delete<User> ('http://localhost:8080/user' + "/" + id); //this http address depends on backend
  // }

  createUser(user: User): Observable<any>{
    console.log("create user");
    return this.http.post<User> ('http://localhost:8080/user', user); //this http address depends on backend
  }

}
