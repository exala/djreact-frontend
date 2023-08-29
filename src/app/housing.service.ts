import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://3.82.6.241:8000/api/search/?search=';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(text: string){
    return this.httpClient.get(this.url+text);
  }
  
}