import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-calls',
  templateUrl: './http-calls.component.html',
  styleUrls: ['./http-calls.component.css']
})
export class HttpCallsComponent implements OnInit {
  getData: any;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.getData = response;
      });
  }

  createPost(input: HTMLInputElement) {
    const postData = { title: input.value};
    input.value = '';

    this.service.createPost(postData)
      .subscribe(response => {
        this.getData.unshift(postData);
      });
  }

  updatePost(data) {
    this.service.updatePost(data)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(data) {
    this.service.deletePost(data.id)
      .subscribe(response => {
        const index = this.getData.indexOf(data);
        this.getData.splice(index, 1);
      });
  }

}
