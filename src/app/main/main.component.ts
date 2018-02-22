import { FavoriteChangedEventArgs } from './../favorite/favorite.component';
import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title = 'Angular app';

  post = {
    isFavorite: false
  };

  likesData = {
    likesCount: 0,
    isSelected: false
  };

  viewMode = '';

  constructor() {}

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs ) {
    console.log('favorite changed', eventArgs);
  }

}

