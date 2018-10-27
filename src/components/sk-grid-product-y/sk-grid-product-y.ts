import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SkGridProductYComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-grid-product-y',
  templateUrl: 'sk-grid-product-y.html'
})
export class SkGridProductYComponent {
  @Input() items: Array<any> = [];
  @Output() viewDetail: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Hello SkGridProductYComponent Component');
  }

  onClickDetail(item) {
    this.viewDetail.emit(item);
  }

}
