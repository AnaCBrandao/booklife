import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../interfaces/Book';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/books`;

  constructor(private http: HttpClient) {

   }

  getBooks(): Observable<Response<Book[]>> {
    return this.http.get<Response<Book[]>>(this.apiUrl)
  }

   createBook(formData: FormData) : Observable<FormData>{
      return this.http.post<FormData>(this.apiUrl, formData);
   }

   getBook(id: number): Observable<Response<Book>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Book>>(url)
  }

  removeBook(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
  }

  updateBook(id: number, formData: FormData){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
