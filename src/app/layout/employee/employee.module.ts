import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {DetailEmployeeComponent} from './detail-employee/detail-employee.component';
import {EmployeeService} from './Employee.service';
import { FormsModule, ReactiveFormsModule,FormControl,Validators } from '@angular/forms';
import { DeleteComponent } from './list-employee/delete/delete.component';
import {ModalModule} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap/modal'
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()

  ],
  providers: [
    EmployeeService,
    ListEmployeeComponent,
    DetailEmployeeComponent,
    BsModalService
  ],
  declarations: [ListEmployeeComponent,EmployeeComponent,DetailEmployeeComponent, DeleteComponent]
})
export class EmployeeModule { }
