import {Component, Input} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Product} from '../products/product';
import {Keyword, keywords} from '../keywords'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  messageFormValidationError = "";

  @Input() product: Product = {
    id: "",
    name: '',
    cost: 0,
    city: '',
    scope: 0,
    keywords: [],
    includeInBudget: true
  };
  keywords: Keyword[]

  constructor(public modalRef: MdbModalRef<ModalComponent>) {
    this.keywords = keywords
  }

  cities = [
    {city: "Rzeszow"},
    {city: "Nowy Sącz"},
    {city: "Limanowa"},
    {city: "Cracow"},
    {city: "Gdansk"},
    {city: "Nowy Targ"}
  ];

  validationFormFun() {
    let valid = true;

    if (!this.product.scope) {
      this.messageFormValidationError = "enter scope"
      valid = false;
    }
    if (!this.product.city) {
      this.messageFormValidationError = "enter city"
      valid = false;
    }
    if (this.product.cost < 0) {
      this.messageFormValidationError = "enter cost > 0"
      valid = false;
    }
    if (!this.product.cost) {
      this.messageFormValidationError = "enter cost"
      valid = false;
    }
    if (!this.product.name) {
      this.messageFormValidationError = "enter name"
      valid = false;
    }
    if (valid) {
      this.modalRef.close({
        save: true,
        product: this.product
      });
    }
  }

  close() {
    this.modalRef.close({
      save: false,
      product: this.product
    });
  }
}
