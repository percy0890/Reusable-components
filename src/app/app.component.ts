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

  viewMode = 'map';

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs ) {
    console.log('favorite changed', eventArgs);
  }

}

