import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {
  appointments: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.http.get<any>('https://my-json-server.typicode.com/superrafyYT/fakeDB/db')
      .subscribe(response => {
        this.appointments = response.bookings;
      });
  }

  getAppointmentColor(index: number): string {
    const colors = ['#ff9999', '#99ff99', '#9999ff']; // Define your color options
    return colors[index % colors.length];
  }
}
