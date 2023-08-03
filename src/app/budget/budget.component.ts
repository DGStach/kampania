import { Component } from '@angular/core';
import {allproducts} from "../mock-products";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {
  budget = 0;

  ngOnInit() {
    this.updateBudget();
  }
  updateBudget():void{
    allproducts.forEach((cost)=>{
        this.budget -= cost.cost
      }
    )
  }
}



