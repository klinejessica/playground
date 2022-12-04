import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { ReadComponent } from './books/read/read.component';


const routes: Routes = [
  { path: 'booksorder', component: BooksComponent },
  { path: 'booksworld', component: BooksComponent},
  { path: 'books2021', component: BooksComponent},
  { path: 'books2022', component: BooksComponent,
    children: [{
      path:'read',
      component: ReadComponent,
    }
      
    ]}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }