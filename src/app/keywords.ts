import {currentProducts} from "./currentProducts";

export interface Keyword {
  name: string
}

export const keywords: Keyword[] = []

export const calculateKeywords = () => {
  currentProducts.forEach((product) => {
    product.keywords.forEach((keyword) => {
      if (!keywords.find((el) => el.name === keyword)) {
        keywords.push({name: ` ${keyword}`})
      }
    })
  })
}

