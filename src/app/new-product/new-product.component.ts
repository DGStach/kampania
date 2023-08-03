import {Component} from '@angular/core';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Product} from "../product";
import {ModalComponent} from '../modal/modal.component';
import {ProductModalCloseResult} from "../productModalCloseResult";
import {allproducts, createProduct} from "../mock-products";
import {City} from "../city";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  modalNewProductOpen: boolean = false;

  selectedProduct?: Product

  constructor(private modalService: MdbModalService) {

    this.product = {
      id: "",
      name: "",
      cost: 0,
      city: "",
      scope: ""
    };
  }


  product: Product;

  openModal(product: Product): void {
    if (!this.modalNewProductOpen) {
      this.modalNewProductOpen = true;

      allproducts.forEach((el) => {
        if (el.id > this.product.id) {
          this.product.id = el.id
        }
      })
      this.product.id += 1

      this.modalRef = this.modalService.open(ModalComponent,
        {
          data: {
            modalNewProductOpen: this.modalNewProductOpen,
            product: {...product}
          }
        })


      this.modalRef.onClose.subscribe((updatedProduct: ProductModalCloseResult) => {
        this.modalNewProductOpen = false

        if (updatedProduct.save === true) {
          createProduct(updatedProduct.product);
        }
      })
    }
  }
}
