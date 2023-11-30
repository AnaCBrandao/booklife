import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() btnText!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
