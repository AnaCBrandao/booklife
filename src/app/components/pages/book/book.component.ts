import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookService } from 'src/app/services/book.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Book } from 'src/app/interfaces/Book';

import { environment } from 'src/environments/environment';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book?: Book;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;
  
  constructor(
    private bookService: BookService, 
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.bookService.getBook(id).subscribe((item) => this.book = item.data)
  }

  async removeHandler(id: number) {
    await this.bookService.removeBook(id).subscribe()

    this.messagesService.add("Livro Excluído com sucesso!")

    this.router.navigate(['/']);
  }

}
