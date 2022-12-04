import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './models/book';
import { BOOKS } from './models/mock-books';
import { BOOKSORDERED } from './models/book-order';
import { BOOKSWORLD } from './models/book-world';
import { BOOKS2021 } from './models/books2021';
import { BOOKS2022 } from './models/books2022';

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

  getBooks2021(): Observable<Book[]> {
    const books = of(BOOKS2021)
    return books;
  }

  getBooks2022(): Observable<Book[]> {
    const books= of (BOOKS2022)
    return books;
  }
}
