import {Component, Input} from '@angular/core';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Product} from "../product";
import {BudgetService} from "../budget/budget-service";
import {currentProducts} from "../currentProducts";
import {ApigetProducts} from "../service"

@Component({
  selector: 'app-modal',
  templateUrl: 'modal-delete.component.html',
  styleUrls: ['modal-delete.component.scss']
})
export class ModalDeleteComponent {
  @Input() product: Product = {
    id: "",
    name: '',
    cost: 0,
    city: '',
    scope:0,
    keywords: [],
    includeInBudget: true
  };

  constructor(public modalDeleteRef: MdbModalRef<ModalDeleteComponent>,
              public budgetService: BudgetService,
              public modalService: MdbModalService,
              private _apiservice: ApigetProducts,

  ) {}

  delete(product:any) {
    this._apiservice.removeProducts(product).subscribe(res => {
      if (product.includeInBudget) this.budgetService.increase(product.cost);
      currentProducts.length = 0;
      currentProducts.push(...res)
      this.modalDeleteRef.close()
    })
/*    allproducts.forEach((product) => {
      if (product.id == id) {
        let indexDeletedProduct = allproducts.indexOf(product)
        allproducts.splice(indexDeletedProduct, 1)
        if (product.includeInBudget) this.budgetService.increase(product.cost);
      }
    })*/
  }
}
