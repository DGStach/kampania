import {allproducts} from "./mock-products";
export interface Keyword {
  name:string
}

export const keywords: Keyword[] = []

allproducts.forEach((product)=>{
  product.keywords.forEach((keyword)=>{
    if(keywords.indexOf(keyword)){
      keywords.push(keyword)
    }
  })
})
keywords.sort()
