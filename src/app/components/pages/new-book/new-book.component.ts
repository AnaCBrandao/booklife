import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BookService } from 'src/app/services/book.service';

import { Router } from '@angular/router';

import { MessagesService } from 'src/app/services/messages.service';
import { Book } from 'src/app/interfaces/Book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  btnText = 'Compartilhar';

  constructor( private bookService: BookService, 
    private messagesService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async createHandler(book: Book){
    const formData = new FormData();

    formData.append("title", book.title)
    formData.append("description", book.description)

    if(book.image){
      formData.append("image", book.image)
    }

    await this.bookService.createBook(formData).subscribe();

    this.messagesService.add('Livro publicado com sucesso!');

    this.router.navigate(['/']);
  }

}
