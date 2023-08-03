import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Product } from '../product';
import {City} from "../city";
import {allproducts} from "../mock-products";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @Input() product: Product = {
    id: "",
    name: '',
    cost: 0,
    city: '',
    scope: '',
    keywords:[]
  };
  budget = 0;

  updateBudget(){
    allproducts.forEach((cost)=>{
        this.budget -= cost.cost
      }
    )
    console.log("budget", this.budget )
  }

  public  dataFields:Object = {text:'city', value:'Id'}
  public cities: City[] = [
    {Id:'Cracow', city: "Rzeszow"},
    {Id:'Gdansk', city: "Nowy Sącz"},
    {Id:'Limanowa', city: "Limanowa"},
    {Id:'Cracow', city: "Cracow"},
    {Id:'Gdansk', city: "Gdansk"},
    {Id:'Limanowa', city: "Nowy Targ"}
  ];

  constructor(public modalRef: MdbModalRef<ModalComponent>) {
  }

  save() {
    this.modalRef.close({
      save: true,
      product: this.product
    });
  }

  close() {
    console.log(this.budget)
    this.modalRef.close({
      save: false,
      product: this.product
    });
  }
}
