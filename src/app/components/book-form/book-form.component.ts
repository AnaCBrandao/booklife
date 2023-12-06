import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() btnText!:string;

  bookForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),  
    })
  }

  get title(){
    return this.bookForm.get('title')!;
  }

  get description(){
    return this.bookForm.get('description')!;
  }

  submit(){
    if(this.bookForm.invalid){
      return;
    }
  }

}
