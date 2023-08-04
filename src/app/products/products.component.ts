import {Component} from '@angular/core';
import {Product} from "../product"
import {allproducts} from "../mock-products"
import {ModalComponent} from '../modal/modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {ProductModalCloseResult} from "../productModalCloseResult";
import {BudgetService} from "../budget/budget-service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = allproducts
  modalRef: MdbModalRef<ModalComponent> | null = null;
  selectedProduct?: Product
  constructor(
    private modalService: MdbModalService, public budgetService: BudgetService) {
  }
  checkValue(ev: any, product: any): void {
    product.includeInBudget = ev.currentTarget.checked;
    allproducts.forEach((el, index) => {
        if (el.id === product.id) {
          allproducts[index] = el
        }
      }
    )
  }
  delete(id: string) {
    allproducts.forEach((product) => {
      if (product.id == id) {
        let indexDeletedProduct = allproducts.indexOf(product)
        allproducts.splice(indexDeletedProduct, 1)
        if (product.includeInBudget) this.budgetService.increase(product.cost);

      }
    })
  }
  openModal(product: Product): void {
    this.modalRef = this.modalService.open(ModalComponent,
      {
        ignoreBackdropClick: true,
        backdrop: false,
        data: {
          product: {...product}
        }
      })
    this.modalRef.onClose.subscribe((updatedProduct: ProductModalCloseResult) => {
      if (updatedProduct.save === true) {
        let id = updatedProduct.product.id;
        allproducts.forEach((el, index) => {
            if (el.id === id) {
              allproducts[index] = updatedProduct.product
            }
          }
        )
      }
    })
  }
}
