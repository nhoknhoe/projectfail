import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Employee.service'
import { Employee } from '../Employee';
import { DeleteComponent } from './delete/delete.component';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  // @ViewChild(DeleteComponent)
  // deleteEmployee:DeleteComponent;
  public dataEmployee: Array<Employee> = [];

  constructor(private dataService: EmployeeService) {}
  ngOnInit() {
    this.dataEmployee = this.dataService.getLists();
  }
  ngAfterViewInit() {
    this.dataEmployee = this.dataService.getLists();
  }
 
  // openModal(){
    // this.deleteEmployee.openModal();
    // this.dataEmployee = this.dataService.getLists();
  // }
  load(){
    this.dataEmployee = this.dataService.getLists();
  }
  _id: string;

  @ViewChild(DeleteComponent)
  del : DeleteComponent;

  outObj:any;
  show(obj){
    this.del.openModal();
    this.outObj = obj;
  }

    deleted: boolean = false;
    obj_del: string;
    onDelete(msg){
      if(msg){
          this.deleted = true;
          this.obj_del = this.outObj.fname + " " + this.outObj.lname;
      }
    }
}
