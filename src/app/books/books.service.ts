import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './models/book';
import { BOOKS } from './models/mock-books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }


  getBooks(): Observable<Book[]>{
    const books = of(BOOKS)
    return books;
  }
}
