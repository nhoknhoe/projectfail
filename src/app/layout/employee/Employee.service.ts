import {Injectable} from '@angular/core';
import { Employee } from './Employee';
import {Observable} from 'rxjs'

@Injectable()
export class EmployeeService {
    dataEmployee:Array<Employee> =[ 
        {uuid:'1',firstName:'Nguyễn',lastName:'Văn Thanh',gender:false,phone:'0941491740',address:'Tam Đàn',salary:6000000,responsibilities:['abc','xyz','aaa']},
        {uuid:'2',firstName:'Nguyễn',lastName:'Văn A',gender:true,phone:'09432491740',address:'Tam Kỳ',salary:6000000,responsibilities:['abc','xyz','aaa']},
        {uuid:'3',firstName:'Nguyễn',lastName:'Văn C',gender:false,phone:'09432491740',address:'Tam Kỳ',salary:6000000,responsibilities:['abc','xyz','aaa']}
    ];
    constructor(){
        const data = JSON.parse(localStorage.getItem('record'));
        if(data) {
            return;
        }
        localStorage.setItem('record',JSON.stringify(this.dataEmployee));
    }
    getLists() {
        return JSON.parse(localStorage.getItem('record'));
    }
    getLocal():Array<Employee> {
            return JSON.parse(localStorage.getItem('record'));
    }
    getID(uuid:string):Employee{
        return this.getLocal().find(p=>p.uuid===uuid);
    }
    remove(uuid:string):Array<Employee> {
        const arr = this.getLocal();
        arr.splice(arr.indexOf(arr.find(p=>p.uuid == uuid)),1);
        localStorage.setItem('record',JSON.stringify(arr));
        return this.getLocal();
    }
    save(employee: Employee): boolean {
        const arrays = this.getLocal();
         const objectOld = arrays.find( p => p.uuid === employee.uuid);
         
         if ( objectOld ) {
             const position = arrays.indexOf(objectOld);
             arrays[position] = employee;
             console.log(arrays);
             localStorage.setItem('record', JSON.stringify(arrays));
             return true;
         } else {
            this.dataEmployee.push(employee);
            localStorage.setItem('record', JSON.stringify(this.dataEmployee));
            return false;
         }
     }
     id_delete(uuid:string){
        localStorage.setItem('id_delete',JSON.stringify(uuid));
     }
     id_getName(uuid:string) :string {
        return this.getLocal().find(p=>p.uuid===uuid).lastName;
     }
}
