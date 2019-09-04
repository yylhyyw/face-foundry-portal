export class Appointment {
    appointmentID: number;
    treatmentsList: string[];
    location: string;
    esthetician: string;
    date: string;
    time: string;
    cancel: boolean;

    constructor(appointmentID: number, treatmentsList: string[], location: string, 
        esthetician: string, date: string, time: string, cancel: boolean) {
            this.appointmentID = appointmentID;
            this.treatmentsList = treatmentsList;
            this.location = location;
            this.esthetician = esthetician;
            this.date = date;
            this.time = time;
            this.cancel = cancel;
    }
}
