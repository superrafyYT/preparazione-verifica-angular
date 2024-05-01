import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { FormsModule } from '@angular/forms';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentFormComponent,
    AppointmentsListComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
