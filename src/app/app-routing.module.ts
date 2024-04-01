import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { AppComponent } from './app.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VediocallComponent } from './vediocall/vediocall.component';


const routes: Routes = [
  {path:"", redirectTo:"/dash",pathMatch:'full'},
  {path:"dash", component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"new",component:NewAppointmentComponent},
  {path:"appointment",component:AppointmentlistComponent},
  {path:"vediocall",component:VediocallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
