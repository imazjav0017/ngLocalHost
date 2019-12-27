import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Employee } from './Employee';
@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private URL="https://jsonplaceholder.typicode.com/posts"
  private localUrl="http://localhost:8080"
  constructor(private http:HttpClient) { }
  public getPosts():Observable<User[]>
  {
    return this.http.get<User[]>(this.URL);
  }
  public getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.localUrl+"/employees");
  }
  public addEmployee(emp:Employee):Observable<Employee>
  {
    console.log("click");
    return this.http.post<Employee>(this.localUrl+"/employees",emp);
  }
  public getEmployee(empId):Observable<Employee>
  {
    return this.http.get<Employee>(this.localUrl+"/employees/"+empId);
  }
}