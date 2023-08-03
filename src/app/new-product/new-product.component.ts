import {Component} from '@angular/core';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Product} from "../product";
import {ModalComponent} from '../modal/modal.component';
import {ProductModalCloseResult} from "../productModalCloseResult";
import {allproducts, createProduct} from "../mock-products";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;

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

      allproducts.forEach((el) => {
        if (el.id > this.product.id) {
          this.product.id = el.id
        }
      })
      this.product.id += 1

      this.modalRef = this.modalService.open(ModalComponent,
        {
          data: {
            product: {...product}
          }
        })

      this.modalRef.onClose.subscribe((updatedProduct: ProductModalCloseResult) => {
        if (updatedProduct.save === true) {
          createProduct(updatedProduct.product);
        }
      })
  }
}
