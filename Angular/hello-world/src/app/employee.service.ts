import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployee(){
    // return [
    //   {"id": 1, "name":"Hasib", "age":23},
    //   {"id": 2, "name":"joy", "age":24},
    //   {"id": 3, "name":"riti", "age":18},
    //   {"id": 4, "name":"ritu", "age":17}
    // ];
    return "hasib is gooodd";

  }

}
