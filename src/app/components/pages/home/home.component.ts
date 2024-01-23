import { Component, OnInit } from '@angular/core';

import {BookService} from '../../../services/book.service';
import { Book } from 'src/app/interfaces/Book';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBooks: Book[] = [];
  books: Book[] = [];
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch;
  searchTerm:string = "";

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((items) => {
      
      const data = items.data
      
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allBooks = data;
      this.books = data

    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.books = this.allBooks.filter((book) => {
      return book.title.toLowerCase().includes(value);
    });
  }

}
