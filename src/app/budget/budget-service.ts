import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {

  left : number = 0;

  decrease(amount: number) {
    console.log("decrease")
    this.left -= amount;
  }

  increase(amount: number) {
    console.log("increase")
    this.left += amount;
  }
}