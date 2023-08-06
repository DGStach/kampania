import {Component} from '@angular/core';
import {Product} from "../product"
import {ModalComponent} from '../modal/modal.component';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {ProductModalCloseResult} from "../productModalCloseResult";
import {BudgetService} from "../budget/budget-service";
import {ModalDeleteComponent} from "../modal-delete/modal-delete.component"
import {ApigetProducts} from '../service'
import {currentProducts} from "../currentProducts";
import {calculateKeywords} from "../keywords";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = currentProducts;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  modalDeleteRef: MdbModalRef<ModalDeleteComponent> | null = null;
  selectedProduct?: Product
  onOfFromBudget = `belong too`;

  constructor(
    private modalService: MdbModalService,
    public budgetService: BudgetService,
    private _apiservice: ApigetProducts
  ) {
  }

  ngOnInit() {
    this._apiservice.getProducts().subscribe(res => {
      this.products.push(...res);
      calculateKeywords();
    })
  }

  openModalDelete(product: Product): void {
    this.modalDeleteRef = this.modalService.open(ModalDeleteComponent, {
      data: {product}
    });
  }


// function checkValue increase (checkbox is checked) or decrease (checkbox is not checked) budgetService.
  checkValue(ev: any, product: any): void {
    product.includeInBudget = ev.currentTarget.checked;
    if (product.includeInBudget) {
      this.budgetService.increase(product.cost)
    }
    if (!product.includeInBudget) {
      this.budgetService.decrease(product.cost);
    }
    currentProducts.forEach((el, index) => {
        if (el.id === product.id) {
          currentProducts[index] = el
        }
      }
    )
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
      if (updatedProduct && updatedProduct.save) {
        this._apiservice.updateProducts(updatedProduct.product).subscribe(() => {
          this._apiservice.getProducts().subscribe(res => {
            currentProducts.length = 0;
            currentProducts.push(...res);
            currentProducts.forEach((product) => {
              if (product.includeInBudget) this.budgetService.decrease(product.cost);
            })
          })
        })
      }
    })
  }
}
