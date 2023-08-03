import { Component } from '@angular/core';
import {allproducts} from "../mock-products";
import {BudgetService} from "./budget-service";

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
    allproducts.forEach((product)=>{
      if (product.includeInBudget) this.budgetService.decrease(product.cost);
      }
    )
  }
}
