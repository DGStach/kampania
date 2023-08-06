import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {

  left : number = 10000;

  decrease(amount: number) {
    this.left -= amount;
  }

  increase(amount: number) {
    this.left += amount;
  }
}
