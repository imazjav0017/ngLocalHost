import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { GetServiceService } from '../get-service.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-c1',
  template: `
    <button (click)="getUsers()">Get Users</button>
    <button (click)="getEmployees()">Get Employees from localhost</button>
    <div *ngIf="isUserSet">
    <table border="1" style="width:33%;">
    <tr>
    <th colspan="2">User Id</th>
    <th colspan="5"> Title <th>
    <th colspan="5"> Body </th>
    </tr>
    <div *ngFor="let user of users">
    <tr>
    <td colspan="2">{{user.userId}}</td>
    <td colspan="5">{{user.title}}</td>
    <td colspan="5">{{user.body.substring(0,10)}}</td>
    </tr>
    </div>
    </table>
    </div>
    <div  *ngIf="isEmployeeSet">
    <table border="1" style="width:33%;">
    <tr>
    <th>EmployeeId</th>
    <th >Name <th>
    <th> Field </th>
    <th>Salary/Month</th>
    </tr>
    <div *ngFor="let employee of employees">
    <tr>
    <td >{{employee.empId}}</td>
    <td >{{employee.empName}}</td>
    <td>{{employee.field}}</td>
    <td>{{employee.salaryPm}}</td>
    </tr>
    </div>
    </table>
    </div>
  `,
  styles: []
})
export class C1Component implements OnInit {
  users:User[];
  employees:Employee[];
  isUserSet:boolean
  isEmployeeSet:boolean
  constructor(private service:GetServiceService) { 
    this.isUserSet=false;
    this.isEmployeeSet=false;
  }

  ngOnInit() {

  }
  public getUsers()
  {
    this.service.getPosts().subscribe((data=>
      {
        this.isUserSet=true;
        console.log(data);
        this.users=data;
      }))
  }
  public getEmployees()
  {
    this.service.getEmployees().subscribe((data =>
      {
        this.isEmployeeSet=true;
        console.log(data);
        this.employees=data;
      }
      ))
  }

}
