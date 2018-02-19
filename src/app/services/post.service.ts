import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url , {responseType: 'json'});
  }

  createPost(postData) {
    return this.http.post(this.url, postData);
  }

  updatePost(data) {
    return this.http.patch(this.url + '/' + data.id, {isRead: true});
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
