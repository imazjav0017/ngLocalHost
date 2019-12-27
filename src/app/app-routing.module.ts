import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = 
[{path:'employee/:empId',component:EmployeeComponent},{path:'',component:C1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules=[C1Component,EmployeeComponent];
