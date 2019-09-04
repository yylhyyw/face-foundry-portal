import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  appointments: Appointment[] = [new Appointment(10001, ["Face Mask", "Manicure", "Pedicure"], 
    "Edina", "Lucy Johnson", "10/10/2019", "3:00pm", false),
    new Appointment(10001, ["Face Mask", "Pedicure"], 
    "North Loop", "Jack Simmons", "11/11/2019", "4:15pm", false),
    new Appointment(10003, ["Nails Touchup"], 
    "Edina", "Jessica Stevens", "12/17/2019", "10:00am", false)]

  user: User = new User("Ben Foster", this.appointments);

  constructor() { }
}
