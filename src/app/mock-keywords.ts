import {allproducts} from "./mock-products";

export const keywords: string[] = []

allproducts.forEach((product)=>{
  product.keywords.forEach((keyword)=>{
    if(keywords.indexOf(keyword)){
      keywords.push(keyword)
    }
  })
})
keywords.sort()
