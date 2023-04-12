import { Component } from '@angular/core';
import { User } from '../user';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private memberService:MemberService, private router:Router){}

  user: User = new User();
  error: String = "";
  submitButton(): void{
    console.log(this.user," is a input")
    let check = this.memberService.isCorrect(this.user);

    if(check){
        this.toItem();
    }else{
      console.log("Here are incorrect")
      this.error = "Email or password not match";
    }
  }

  toItem():void{
    this.router.navigate(["items"]);
  }

}
