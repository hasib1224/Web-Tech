import { User } from "./user";

export class UserService{
    constructor() {}

    users: User[]=[
                {Email: "bsse1209@iit.du.ac.bd", Password: "iit123"},
                {Email: "bsse1212@iit.du.ac.bd", Password: "iit123"},
                {Email: "bsse1231@iit.du.ac.bd", Password: "iit123"}
                ]


    getUsers(): User[] {
        return this.users;
    }

    isCorrect(user_data: User): boolean{
        let match = false;
        this.users.forEach(user=>{
            if(user == user_data){
                match = true;
            }
        })

        return match;
    }
}