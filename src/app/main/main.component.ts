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

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.user = this.appService.user;
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
}
