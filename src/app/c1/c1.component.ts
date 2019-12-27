import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { GetServiceService } from '../get-service.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c1',
  template: `
    <div  *ngIf="isEmployeeSet">
    <table border="1" style="width:33%;">
    <tr>
    <th>EmployeeId</th>
    <th>Name <th>
    <th>Field</th>
    <th>Salary/Month</th>
    </tr>
    <div *ngFor="let employee of employees">
    <tr (click)="goToEmployee(employee.empId)">
    <td>{{employee.empId}}</td>
    <td>{{employee.empName}}</td>
    <td>{{employee.field}}</td>
    <td>{{employee.salaryPm}}</td>
    </tr>
    </div>
    </table>
    </div>
    <button (click)="showAddForm()">Add</button>
    <div *ngIf="toAdd">
    <form>
   Emp Id: <input #empId type="text"><br>
   Emp Name: <input #empName type="text"><br>
   Emp Field: <input #empField type="text"><br>
   Emp Salary Per Month: <input #salaryPm type="text"><br>
   <button (click)="addEmployee(empId.value,empName.value,empField.value,salaryPm.value)">Save</button>
   </form>
    </div>
      `,
  styles: []
})
export class C1Component implements OnInit {
  employees:Employee[];
  isEmployeeSet:boolean
  toAdd:boolean;
  constructor(private service:GetServiceService,private router:Router) { 

    this.isEmployeeSet=false;
    this.toAdd=false;
  }

  ngOnInit() {
    this.getEmployees();
  }
  public showAddForm()
  {
    this.toAdd=true;
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
  public addEmployee(id,name,fld,spm)
  {
    console.log("clicked");
    var emp:Employee;
    emp={empId:id,empName:name,field:fld,salaryPm:spm};
    this.service.addEmployee(emp).subscribe((data =>
      {
        console.log(data);
      }))
  }
  public goToEmployee(empId:number)
  {
    this.router.navigate(['/employee',empId])
  }

}
