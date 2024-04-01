import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newapp } from 'src/model/pateint';
import { NewappointmentService } from 'src/service/newappointment.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  newapp = {
    name: '',
    mobileNo: '',
    city: '',
    age: '',
    isFirstTime:'',
    gender:'',
    appointmentDate:'',
    appointmentTime:'',
    narration:''
  };
  appointmentForm: FormGroup|any;
  constructor(private fb: FormBuilder, private route:Router,private newappservice:NewappointmentService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', Validators.required],
      isFirstTime: [false],
      gender: ['Male'], // Default value
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      narration: ['']
    });
  }

  submitForm(): void {
    if (this.appointmentForm.valid) {
      let formdata:newapp=this.appointmentForm.value as newapp;

      this.newappservice.addNewApp(formdata).subscribe(data=>{
        alert('Appointment Successful');
      }
        )
      this.appointmentForm.reset();
      this.route.navigate(['/vediocall']);


    }
  }
goBack(){
this.route.navigate(['/']);
}
}
