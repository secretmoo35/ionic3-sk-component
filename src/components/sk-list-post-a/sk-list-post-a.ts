import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SkListPostAComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-list-post-a',
  templateUrl: 'sk-list-post-a.html'
})
export class SkListPostAComponent {
  @Input('items') items: any;
  @Output() image: EventEmitter<any> = new EventEmitter<any>();
  @Output() like: EventEmitter<any> = new EventEmitter<any>();
  @Output() comment: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello SkListPostAComponent Component');
  }

  clickImage() {
    this.image.emit();
  }

  clickLike() {
    this.like.emit();
  }

  clickComment() {
    this.comment.emit();
  }

}
