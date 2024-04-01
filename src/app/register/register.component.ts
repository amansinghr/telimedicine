import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private form:FormBuilder,
    private route:Router,private userservice:UserService,private snackbar:MatSnackBar){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  Registeringdetails=this.form.group({
    email:["",[Validators.required, this.emailvalidation]],
    username:["",[Validators.required, Validators.minLength(3),this.namevalidation]],
    password:["",[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmpassword:["",Validators.required],
    mobilenumber:[0,[Validators.required, Validators.pattern(/^[6789]\d{9,9}$/)]],
  },{ validators: [this.passwordvalidation] }
  )

  //Password and Confirmpassword Validation
  passwordvalidation(formvalue: AbstractControl) {
    const passwordValue = formvalue.get("password")?.value;
    const confirmPasswordValue = formvalue.get("confirmpassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { mustMatch: true }
    }
    return null;
  }

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

  //Username validation
  namevalidation(username:AbstractControl){
    const name=username.value;
    if (name.startsWith('0') || name.startsWith('1') || name.startsWith('2') || name.startsWith('3') || name.startsWith('4') || name.startsWith('5') || name.startsWith('6') || name.startsWith('7') || name.startsWith('8') || name.startsWith('9') || name.startsWith("*") || name.startsWith("/") || name.startsWith("-") || name.startsWith("+") || name.startsWith("!") || name.startsWith("@")|| name.startsWith("#")|| name.startsWith("$")|| name.startsWith("%") || name.startsWith("^")|| name.startsWith("&")|| name.startsWith("%")) {
      return { invalidname: true };
    }
    else {
      return null;
    }

  }

  //Method to get Email value
  get emailvalue() { return this.Registeringdetails.get("email"); }

  //Method to get Username value
  get usernnamevalue() { return this.Registeringdetails.get("username"); }

  //Method to get Password value
  get passwordvalue() { return this.Registeringdetails.get("password"); }

  //Method to get ConfirmPassword value
  get confirmpasswordvalue() { return this.Registeringdetails.get("password"); }

   //Method to get Mobilenumber value
   get mobilenumbervalue() { return this.Registeringdetails.get("mobilenumber"); }


  onsubmit(){
    let formdata:User=this.Registeringdetails.value as User;
    this.userservice.addUser(formdata).subscribe(data=>{
      console.log("success");
      alert('Registration Successful')
  this.route.navigate(['/login']);

})
}
}