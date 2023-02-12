import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `

  <!-- <ul *ngFor="let employee of employees ">
    <li>{{employee}}</li>
  </ul> -->

  <h1>{{employees}}</h1>

 

  `,
  styles: []
})
export class EmployeeListComponent implements OnInit{
  // public employees =[];
  // public employees: { id: number, name: string, age: number }[] = [];
  public employees="";


  constructor(private _employeeServices:EmployeeService){}
  
  ngOnInit() {
    this.employees=this._employeeServices.getEmployee();
  }

}
