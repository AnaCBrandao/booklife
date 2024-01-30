import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

import { Book } from 'src/app/interfaces/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Book>()
  @Input() btnText!:string;
  @Input() bookData: Book | null = null; 


  bookForm!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(this.bookData ? this.bookData.id : ''),
      title: new FormControl(this.bookData ? this.bookData.title : '', [Validators.required]),
      description: new FormControl(this.bookData ? this.bookData.description : '', [Validators.required]),
      image: new FormControl(''),  
    })
  }

  get title(){
    return this.bookForm.get('title')!;
  }

  get description(){
    return this.bookForm.get('description')!;
  }

  onFileSelected(event: any){
    const file : File = event.target.files[0];
    
    this.bookForm.patchValue({image : file})
  }

  submit(){
    if(this.bookForm.invalid){
      return;
    }

    this.onSubmit.emit(this.bookForm.value)
  }

}
