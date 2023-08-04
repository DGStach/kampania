import {Keyword} from "./mock-keywords";

export interface Product {
  id:string;
  name: string;
  cost: number;
  scope: string;
  city: string;
  keywords:string[];
  includeInBudget: boolean;
}
