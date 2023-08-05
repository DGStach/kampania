import {Component, Input} from '@angular/core';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {Product} from "../product";
import {BudgetService} from "../budget/budget-service";
import {allproducts} from "../mock-products";
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
              public modalService: MdbModalService) {}

  delete(id:string) {
    allproducts.forEach((product) => {
      if (product.id == id) {
        let indexDeletedProduct = allproducts.indexOf(product)
        allproducts.splice(indexDeletedProduct, 1)
        if (product.includeInBudget) this.budgetService.increase(product.cost);
      }
    })
    this.modalDeleteRef.close();
  }
}
