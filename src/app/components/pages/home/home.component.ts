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

}
