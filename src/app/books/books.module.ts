import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './books/read/read.component';



@NgModule({
  declarations: [
    BooksComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class BooksModule { }
