import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';


const routes: Routes = [
  { path: 'booksorder', component: BooksComponent },
  { path: 'booksworld', component: BooksComponent},
  { path: 'books2021', component: BooksComponent},
  { path: 'books2022', component: BooksComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }