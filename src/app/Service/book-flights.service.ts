import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookFlights } from '../Model/book-flights';

@Injectable({
  providedIn: 'root'
})
export class BookFlightsService {

  url : string = "http://localhost:3000/book"
  constructor(private httpclient : HttpClient) { }

  getAll(){
    return this.httpclient.get<BookFlights[]>(this.url);
  }

  public updateBook(id: number, bookFlights: BookFlights): Observable<Object>{
    return this.httpclient.put<BookFlights>(`${this.url}/${id}`, bookFlights);
  }

  public deleteBook(id: number) : Observable<BookFlights>{
    return this.httpclient.delete<BookFlights>(`${this.url}/${id}`);
  }

  public addBooking(bookflights: BookFlights): Observable<Object>{
    return this.httpclient.post(`${this.url}`, bookflights);
  }
}
