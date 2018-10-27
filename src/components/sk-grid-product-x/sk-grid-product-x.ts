import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SkGridProductXComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-grid-product-x',
  templateUrl: 'sk-grid-product-x.html'
})
export class SkGridProductXComponent {
  @Input() items: Array<any> = [];
  @Output() viewDetail: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Hello SkGridProductXComponent Component');
  }

  onClickDetail(item){
    this.viewDetail.emit(item);
  }

}
