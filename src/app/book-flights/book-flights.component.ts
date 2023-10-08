import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookFlights } from '../Model/book-flights';
import { BookFlightsService } from '../Service/book-flights.service';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css']
})
export class BookFlightsComponent implements OnInit {

  bookflights: BookFlights[] = [];
  firstname!: string;

  constructor(private bf : BookFlightsService, private router : Router) { }

  ngOnInit(): void {
    this.bf.getAll().subscribe(response => {
      this.bookflights = response;
      console.log(response)
    })
  }

  Search(){
    if(this.firstname == ""){
      this.ngOnInit();
    }else{
      this.bookflights = this.bookflights.filter(res => {
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }

  updateBook(id: number){
    this.router.navigate(['/add-booking', id])
  }

  reload(){
    window.location.reload();
  }

  public deleteBook(id: number){
    this.bf.deleteBook(id).subscribe((response) => {
      alert("Delete Successfully");
      console.log(response);
      this.reload();
    })
  }

}
