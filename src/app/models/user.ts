import { Appointment } from './appointment';

export class User {
    name: string;
    appointmentsList: Appointment[];

    constructor(name: string, appointmentsList: Appointment[]) {
        this.name = name;
        this.appointmentsList = appointmentsList;
    }
}
