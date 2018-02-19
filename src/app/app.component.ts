import { PostService } from './services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

