import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isSelected') isSelected: boolean;
  @Input('likesCount') likesCount: number;

  toggle() {
    this.isSelected = !this.isSelected;
    this.likesCount += this.likesCount ? -1 : 1;
    console.log(this.isSelected);
  }

}
