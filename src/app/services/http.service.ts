import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  public getPostList(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.BASE_URL + 'posts');
  }

  public addPost(post: PostModel): Observable<PostModel> {
    const headers = new HttpHeaders();
    return this.httpClient.post<PostModel>(this.BASE_URL + 'posts', post, { headers })
  }
}
