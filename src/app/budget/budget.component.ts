import { Component } from '@angular/core';
import {BudgetService} from "./budget-service";
import {currentProducts} from "../currentProducts";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {

  constructor(public budgetService: BudgetService) {
  }

  ngOnInit() {
    this.updateBudget();
  }
  updateBudget():void{
    currentProducts.forEach((product)=>{
      if (product.includeInBudget) this.budgetService.decrease(product.cost);
      }
    )
  }
}
