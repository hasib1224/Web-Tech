import { User } from "./user";
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MemberService{
    constructor() {}

    users: User[]=[
                {Email: "bsse1209@iit.du.ac.bd", Password: "iit123"},
                {Email: "bsse1212@iit.du.ac.bd", Password: "iit123"},
                {Email: "bsse1231@iit.du.ac.bd", Password: "iit123"}
                ]


    getUsers(): User[] {
        return this.users;
    }

    setUser(user_data: User):boolean{
      if(!this.users.some(user => user.Email === user_data.Email)){
        this.users.push(user_data);
        return true;
      }
      else{
        return false;
      }
    }

    isCorrect(user_data: User): boolean{
        let match = false;
        this.users.forEach(user=>{
            if(user.Email == user_data.Email && user.Password == user_data.Password){
                match = true;
            }
        })

        return match;
    }
}