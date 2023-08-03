import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Product } from '../product';
import { cities } from '../mock-cities';
import {City} from "../city";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalNewProductOpen: boolean = false;
  @Input() product: Product = {
    id: "",
    name: '',
    cost: 0,
    city: '',
    scope: ''
  };

  public  dataFields:Object = {text:'city', value:'Id'}
  public cities: City[] = [
    {Id:'Cracow', city: "Rzeszow"},
    {Id:'Gdansk', city: "Nowy Sącz"},
    {Id:'Limanowa', city: "Limanowa"},
    {Id:'Cracow', city: "Cracow"},
    {Id:'Gdansk', city: "Gdansk"},
    {Id:'Limanowa', city: "Nowy Targ"}
  ];

  constructor(public modalRef: MdbModalRef<ModalComponent>) {}

  save() {
    this.modalNewProductOpen = true;
    this.modalRef.close({
      save: true,
      product: this.product
    });
  }

  close() {
    this.modalNewProductOpen = true;
    this.modalRef.close({
      save: false,
      product: this.product
    });
  }
}
