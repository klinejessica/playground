import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  book: Book[] = [];
  bookList = [
    "one",
    "two",
    "three"
  ]

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(){
    this.getBooks();
  }

  getBooks(){
    this.booksService.getBooks().subscribe(books => this.book = books);
  }
  
  
  addBook(){

  }

}
