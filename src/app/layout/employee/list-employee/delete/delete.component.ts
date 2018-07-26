import { Component, OnInit, ViewChild,TemplateRef,Input,Output,EventEmitter } from '@angular/core';
import {EmployeeService} from './../../Employee.service';
import {ListEmployeeComponent} from '../list-employee.component';
import {BsModalService} from 'ngx-bootstrap/modal'
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
display='none';
name:string = 'abc';
uuid:string = null;
modalRef:BsModalRef;
  constructor(private modalService:BsModalService,private employeeService:EmployeeService) { }
  @Input() data;
  @ViewChild('template') template;
  ngOnInit() {
    
  }
  openModal() {
    // this.modalRef = this.modalService.show(this.template,{class: 'modal-sm'});
      this.modalRef = this.modalService.show(this.template);
  }
  confirm() {
    this.modalRef.hide();
    this.employeeService.remove(this.data.id);
    this.delete.emit(true);
}
@Output() delete = new EventEmitter<boolean>();
decline(){
  this.modalRef.hide();
}
  // delete(): void {
    // this.deleteService.remove(this.uuid);
    // this.display = 'none';
  // }
  // openModal(uuid:string) {
    // this.uuid = uuid;
    // this.deleteService.id_delete(uuid);
    // this.name = this.deleteService.id_getName(uuid);
    // this.display = 'block';
  // }

  // onCloseHandled() {
  //   this.display = 'none';
  // }
}
