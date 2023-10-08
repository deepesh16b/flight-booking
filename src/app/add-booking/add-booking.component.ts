import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookFlights } from '../Model/book-flights';
import { BookFlightsService } from '../Service/book-flights.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  bookFlights : BookFlights = new BookFlights();
  constructor(private bf : BookFlightsService, private router : Router) { }

  ngOnInit(): void {
  }

  public saveBooking(){
    this.bf.addBooking(this.bookFlights).subscribe((response) => {
      alert("Saved Successfully");
      this.router.navigate(['/book-flights']);
      console.log(response);
    })
    
  }
}
