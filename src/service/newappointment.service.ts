import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewappointmentService {

  private baseUrl = 'http://localhost:3001/newappointment';

  constructor(private http: HttpClient) { }

  addNewApp(newapp: any): Observable<any> {
    return this.http.post(this.baseUrl, newapp );
  }
}
