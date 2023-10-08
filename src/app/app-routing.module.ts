import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'book-flights', component: BookFlightsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add-booking', component: AddBookingComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
