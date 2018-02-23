import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}
