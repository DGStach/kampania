import {Component} from '@angular/core';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Product} from "../product";
import {ModalComponent} from '../modal/modal.component';
import {ProductModalCloseResult} from "../productModalCloseResult";
import {allproducts, createProduct} from "../mock-products";
import {BudgetService} from "../budget/budget-service";
import {ApigetProducts} from "../service";
import {currentProducts} from "../currentProducts";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;

  selectedProduct?: Product

  constructor(private modalService: MdbModalService,
              public budgetService: BudgetService,
              private _apiservice: ApigetProducts) {

    this.product = {
      id: "",
      name: "",
      cost: 0,
      city: "",
      scope: 0,
      keywords: [],
      includeInBudget: true
    };
  }
  product: Product;

  openModal(product: Product): void {

    this.modalRef = this.modalService.open(ModalComponent,
      {
        data: {
          product: {...product}
        }
      })

    this.modalRef.onClose.subscribe((updatedProduct: ProductModalCloseResult) => {
      if (updatedProduct && updatedProduct.save) {
        this._apiservice.createProducts(updatedProduct.product).subscribe(
          res => {
            if (res.includeInBudget) this.budgetService.decrease(res.cost)
            this._apiservice.getProducts().subscribe(res => {
              currentProducts.length = 0;
              currentProducts.push(...res);
            })
          }
        )
      }
    })
  }
}
