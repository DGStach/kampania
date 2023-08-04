import {Keyword} from "./mock-keywords";

export interface Product {
  id:string;
  name: string;
  cost: number;
  scope: number;
  city: string;
  keywords:string[];
  includeInBudget: boolean;
}
