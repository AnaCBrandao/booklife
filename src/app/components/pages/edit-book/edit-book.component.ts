import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/interfaces/Book';
import { BookService } from 'src/app/services/book.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book!: Book
  btnText: string = 'Editar';

  constructor(
    private bookService: BookService, 
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.bookService.getBook(id).subscribe(item => {
      this.book = item.data;
    })
  }

  async editHandler(bookData: Book){
    const id = this.book.id;
    const formData = new FormData()

    formData.append('title', bookData.title)
    formData.append('description', bookData.description)
  
    if(bookData.image){
      formData.append('image', bookData.image)
    }

    await this.bookService.updateBook(id!, formData).subscribe();

    this.messagesService.add(`Livro ${id} foi atualizado com sucesso!`);

    this.router.navigate(['/']);
  }

}
