import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url="http://localhost:300/api/";

  header = new HttpHeaders()
  .set('Type-content', 'aplication/json')

  constructor(private http: HttpClient) { }
}
