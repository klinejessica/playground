import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class BooksModule { }
