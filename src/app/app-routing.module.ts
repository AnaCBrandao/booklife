import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewBookComponent } from './components/pages/new-book/new-book.component';
import { BookComponent } from './components/pages/book/book.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'books/new', component: NewBookComponent},
  {path: 'books/edit/:id', component: EditBookComponent},
  {path: 'books/:id', component: BookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
