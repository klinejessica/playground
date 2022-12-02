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
  book: Book[] = [];
  bookOrder: Book[] = [];
  bookWorld: Book[] = [];
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
    
  }

  getBooks() {
    this.isBookOrder = false;
    this.isBook = true
    this.booksService.getBooks().subscribe(books => this.book = books);
  }

  getBookOrder() {
    this.isBook = false;
    this.isBookOrder = true;
    this.booksService.getBookOrder().subscribe(books => this.bookOrder = books);
  }


  getBooksWorld() {
    this.isBook = false;
    this.isBookOrder = false;
    this.booksService.getBooksWorld().subscribe(books => this.bookWorld = books);
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
