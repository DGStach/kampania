import {allproducts} from "./mock-products";
export interface Keyword {
  name:string
}

export const keywords: Keyword[] = []

allproducts.forEach((product)=>{
  product.keywords.forEach((keyword)=>{
    if(!keywords.find((el)=>el.name === keyword)){
      keywords.push({name: ` ${keyword}`})
    }
  })
})
