import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SkListProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-list-product',
  templateUrl: 'sk-list-product.html'
})
export class SkListProductComponent {
  @Input() items: Array<any> = [];
  @Output() viewDetail: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Hello SkListProductComponent Component');
  }

  onClickDetail(item) {
    this.viewDetail.emit(item);
  }

}
