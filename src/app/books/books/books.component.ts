import { Component, OnInit } from '@angular/core';
import {  FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  isBook: boolean = false;
  isWorld: boolean = false;
  isBookOrder: boolean = false;
  is2021: boolean = false;
  is2022: boolean = false;
  book: Book[] = [];
  bookOrder: Book[] = [];
  bookWorld: Book[] = [];
  books2021: Book[] = [];
  books2022: Book[] = [];
  bookList = [
    "one",
    "two",
    "three"
  ]
  bookTab = "";
  counter: number = 0;
  isChecked: boolean = false;



  constructor(private route: ActivatedRoute, private booksService: BooksService, fb: FormBuilder) {

  }

  ngOnInit() {
    this.getBooks();
    this.getBookOrder();
    this.getBooksWorld();
    this.getBooks2021();
    this.getBooks2022();
    
  }

  getBooks() {
    // this.isBookOrder = false;
    // this.isBook = true
    // this.is2021 = false;
    // this.is2022 = false;
    // this.isWorld = false;
    this.booksService.getBooks().subscribe(books => this.book = books);
  }

  getBookOrder() {
    // this.isBook = false;
    // this.isBookOrder = true;
    this.booksService.getBookOrder().subscribe(books => this.bookOrder = books);
  }


  getBooksWorld() {
    // this.isBook = false;
    // this.isBookOrder = false;
    // this.is2021 = false;
    // this.is2022 = false;
    // this.isWorld = true;
    this.booksService.getBooksWorld().subscribe(books => this.bookWorld = books);
  }

  getBooks2021() {
    // this.isBook = false;
    // this.isBookOrder = false;
    // this.is2021 = true;
    // this.is2021 = false;
    this.booksService.getBooks2021().subscribe(books => this.books2021 = books);
  }

  getBooks2022() {
    // this.isBook = false;
    // this.isBookOrder = false;
    // this.is2021 = false;
    // this.is2022 = true;
    this.booksService.getBooks2022().subscribe(books => this.books2022 = books);
  }

  onCheckboxChange($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    const audio = new Audio('/assets/audio/buttonaudio.mp3');
    audio.load();
    if(!isChecked){
      
      this.counter--;
    } else {
      audio.play()
      this.counter++;
    }
    console.log(id, isChecked); 
    
  }
  




addBook(){

}

}
