import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class CustomerService  {

  constructor(private http:HttpClient) { }

  getPosts() : Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  };

  createPosts(requestBody) : Observable<any> {
    return this.http.post("http://jsonplaceholder.typicode.com/posts", requestBody);
  };

}
