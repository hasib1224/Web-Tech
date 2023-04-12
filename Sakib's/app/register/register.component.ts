import { Component } from '@angular/core';
import { User } from '../user';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private memberService:MemberService, private router:Router){}

  user: User = new User();
  error: String = "";
  confirmPass: String="";
  submitButton(): void{
    console.log(this.user," is a input")
    let check = this.memberService.setUser(this.user);

    if(check){
        this.toItem();
    }else{
      console.log("Here are incorrect")
      this.error = "Users already exixts";
    }
  }

  toItem():void{
    this.router.navigate(["items"]);
  }

}
