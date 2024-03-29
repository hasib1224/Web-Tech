import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <!-- <ul *ngFor="let employee of employees ">
      <li>{{employee.id}} {{employee.name}}</li>
    </ul> -->

    <h1>{{employees}}</h1>

  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  public employees="";
  constructor(private _employeeService: EmployeeService){}

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
    
  }

}
