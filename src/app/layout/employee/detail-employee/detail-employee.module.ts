import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailEmployeeComponent } from './detail-employee.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [ DetailEmployeeComponent]
})
export class DetailEmployeeModule { }
