import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { User } from '../models/user';
import { Appointment } from '../models/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: User;
  appointments: Appointment[];
  selectedAppointment: Appointment = null;
  // reponse info
  reponse_info: any;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.get_appointments();
    // this.user = this.appService.user;
    this.appointments = this.user.appointmentsList;
    console.log(this.user);
  }

  spaceStringList(list: string[]){
    let newList: string[] = []
    let string: string = "";
    for(let item of list) {
      string = " " + item;
      newList.push(string);
    }
    return newList;
  }

  selectAppointment(appointment: Appointment) {
    this.selectedAppointment = appointment;

  }

  cancelAppointment(){
    this.selectedAppointment.cancel = true;
    this.removeAppointment();
    this.user.appointmentsList = this.appointments;
    this.appService.appointments = this.appointments;
    this.appService.user = this.user;
    console.log(this.appService.user.appointmentsList);
    this.router.navigate(['/']);
  }

  removeAppointment() {
    let index: number = 0;
    for(let appointment of this.appointments) {
      index = index++;

      if (appointment.cancel == true) {
        this.appointments.splice(index, 1);
      }
    }
  }

  get_appointments() {
    const postData = {
      "LocationID": 38698,
      "access_token": this.appService.access_token_user
    };
    console.log('start-----');
    this.appService.onPostAppointments(postData).subscribe(response => {
      console.log(response);
      this.reponse_info = response;
      if (this.reponse_info.statusCode == 404) {
        this.appointments = null;
        this.user = new User(this.appService.user_first_name + ' ' + this.appService.user_last_name, null);
      } },
      error => {console.log(error); },
      () => {});
  }
}
