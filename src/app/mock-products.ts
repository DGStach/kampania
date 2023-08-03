import {Product} from "./product";
import {v4 as uuidv4} from 'uuid';

export const createProduct = (product: Product) => {
  product.id = uuidv4();
  allproducts.push(product);
}

export const allproducts: Product[] = [
  {
    id: "874f0d37-07a0-4ae0-a613-929c17e7b668",
    name: "CAMPAIGN 1",
    cost: 1000,
    scope: "5km",
    city: "Grodno",
    keywords:[{name:"NORTH AMERICA"}, {name:"EUROPE"}, {name:"AUSTRALIA"}],
    includeInBudget: true
  },
  {
    id: "a060cc9a-a97e-44b3-bf2c-ab28dc5de85b",
    name: "CAMPAIGN 2",
    cost: 500,
    scope: "15km",
    city: "Limanowa",
    keywords:[{name:"AFRICA"}, {name:"EUROPE"}, {name:"SOUTH AMERICA"}],
    includeInBudget: true

},
  {
    id: "ce41ba4f-9090-4d21-a43d-da1a48ff6ede",
    name: "CAMPAIGN 3",
    cost: 800,
    scope: "25km",
    city: "Warsaw",
    keywords:[],
    includeInBudget: true
  },
  {
    id: "1d121011-d0b9-4606-abed-fb09944fd43e",
    name: "CAMPAIGN 4",
    cost: 200,
    scope: "3km",
    city: "Przeworsk",
    keywords:[{name:"ASIA"}, {name:"AUSTRALIA"}],
    includeInBudget: true
  }
]
