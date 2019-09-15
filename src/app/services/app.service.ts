import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Appointment } from '../models/appointment';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  access_token_user: any;

  user_first_name: string;

  user_last_name: string;

  appointments: Appointment[] = [new Appointment(10001, ["Face Mask", "Manicure", "Pedicure"], 
    "Edina", "Lucy Johnson", "10/10/2019", "3:00pm", false),
    new Appointment(10001, ["Face Mask", "Pedicure"], 
    "North Loop", "Jack Simmons", "11/11/2019", "4:15pm", false),
    new Appointment(10003, ["Nails Touchup"], 
    "Edina", "Jessica Stevens", "12/17/2019", "10:00am", false)]

  user: User = new User("Ben Foster", this.appointments);

  constructor(private http: HttpClient) { }

  onPostLogin(postData: {}) {
    const endpoint = "http://127.0.0.1:5002/login";
    return this.http.post(endpoint, postData);
  }

  onPostAppointments(postData: {}) {
    const endpoint = "http://127.0.0.1:5002/appointments";
    return this.http.post(endpoint, postData);
  }
}
