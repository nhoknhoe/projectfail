import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {DetailEmployeeComponent} from './detail-employee/detail-employee.component';
import {EmployeeService} from './Employee.service';
import { FormsModule, ReactiveFormsModule,FormControl,Validators } from '@angular/forms';
import { DeleteComponent } from './list-employee/delete/delete.component';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    ListEmployeeComponent,
    DetailEmployeeComponent
  ],
  declarations: [ListEmployeeComponent,EmployeeComponent,DetailEmployeeComponent, DeleteComponent]
})
export class EmployeeModule { }
