import { Component, OnInit } from '@angular/core';
import {  FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { read } from 'fs';
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
  // read:boolean = false;
  readTab: boolean = false;
  // rbooks2022= Book[] = [];

  
  constructor(private route: ActivatedRoute, private booksService: BooksService, fb: FormBuilder) {

  }

  ngOnInit() {
    this.getBooks();
    this.getBookOrder();
    this.getBooksWorld();
    this.getBooks2021();
    this.getBooks2022();
    
  }

  getCount(read: boolean){
    return this.books2022.filter(o=> o.read === read).length;
  }

  getBooks() {
    this.booksService.getBooks().subscribe(books => this.book = books);
  }

  getBookOrder() {
    this.booksService.getBookOrder().subscribe(books => this.bookOrder = books);
  }


  getBooksWorld() {
    this.booksService.getBooksWorld().subscribe(books => this.bookWorld = books);
  }

  getBooks2021() {
    this.booksService.getBooks2021().subscribe(books => this.books2021 = books);
  
  }

  getBooks2022() {
    this.booksService.getBooks2022().subscribe(books => this.books2022 = books);
    
  }

  onCheckboxChange($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    const audio = new Audio('/assets/audio/clickSound.mov');
    audio.load();
    if(!isChecked){
      this.counter--;
      this.book.map(o => o.read === false);
    } else {
      audio.play()
      this.counter++;
    }
    console.log(id, isChecked); 
    
  }
   
  //sound + counter
  //mark as read
  //save
  
  readBook($event: any){


  }
  




addBook(){

}

}
