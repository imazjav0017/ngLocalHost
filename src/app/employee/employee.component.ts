import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
@Component({
  selector: 'app-employee',
  template: `
    Employee:
    <div *ngIf="isLoaded">
    <b>EmployeeId:</b> {{emp.empId}}<br>
    <b>Employee Name:</b> {{emp.empName}}<br>
    <b>Employee Field:</b> {{emp.field}}<br>
    <b>Employee Salary Per Month:</b> {{emp.salaryPm}}<br>
    </div>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {
  emp:Employee
  isLoaded:boolean
  constructor(private service:GetServiceService,private route:ActivatedRoute) {
    this.isLoaded=false;
   }

  ngOnInit() {
    let empId=parseInt(this.route.snapshot.paramMap.get('empId'));
    this.service.getEmployee(empId).subscribe((data=>
      {
        console.log(data);
        this.emp=data;
        this.isLoaded=true;
      }))
  }

}
