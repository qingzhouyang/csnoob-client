import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    console.log("got user");
    return this.http.get<User[]> ('http://localhost:8080/employees'); //this http address depends on backend
  }

  public createUser(user): Observable<any>{
    return this.http.post<User> ('http://localhost:8080/employees', user); //this http address depends on backend
  }

  public deleteUser(user): Observable<any>{
    return this.http.delete<User> ('http://localhost:8080/employees' + "/" + user.id); //this http address depends on backend
  }


}
