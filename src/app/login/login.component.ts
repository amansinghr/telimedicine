import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:any={};


  constructor(private form:FormBuilder,
    private route:Router,
    private userservice:UserService){}

  Userdetails=this.form.group({
    email:["",[Validators.required, this.emailvalidation]],
    password:["",[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
  })

  //Email Validation
  emailvalidation(email: AbstractControl) {
    const emailvalue = email.value;
    if (emailvalue.startsWith('0') || emailvalue.startsWith('1') || emailvalue.startsWith('2') || emailvalue.startsWith('3') || emailvalue.startsWith('4') || emailvalue.startsWith('5') || emailvalue.startsWith('6') || emailvalue.startsWith('7') || emailvalue.startsWith('8') || emailvalue.startsWith('9') || !emailvalue.endsWith('gmail.com')) {
      return { invalidemail: true };
    }
    else {
      return null;
    }
  }

  //Method to get Email value
  get emailvalue() { return this.Userdetails.get("email"); }

  //Method to get Password value
  get passwordvalue() { return this.Userdetails.get("password"); }

  onsubmit(){
    let userdetail:User=this.Userdetails.value as User;
    this.userservice.getUser().subscribe(data=>{
      const filtereddata=data.filter((d:any)=>d.email===userdetail.email && d.password===userdetail.password);
      console.log(filtereddata);
      if(filtereddata.length>0){
    this.route.navigateByUrl("/");
      }})
    }
}
