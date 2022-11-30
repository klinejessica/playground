import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './models/book';
import { BOOKS } from './models/mock-books';
import { BOOKSORDERED } from './models/book-order';
import { BOOKSWORLD } from './models/book-world';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  

  constructor() { }


  getBooks(): Observable<Book[]>{
    const books = of(BOOKS)
    return books;
  }

  getBookOrder(): Observable<Book[]> {
    const books = of(BOOKSORDERED)
    return books;
  }

  getBooksWorld(): Observable<Book[]> {
    const books = of(BOOKSWORLD)
    return books;
  }
}
