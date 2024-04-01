import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule} from  '@angular/material/icon';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { VediocallComponent } from './vediocall/vediocall.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppointmentlistComponent,
    NewAppointmentComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    VediocallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    
    
     

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
