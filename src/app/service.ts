import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs'
import {Product} from "./products/product";

@Injectable({
  providedIn: "root"
})

export class ApigetProducts {
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any>("https://kampaniabackend.onrender.com/products")
  }

  createProducts(product: Product): Observable<any> {
    return this.http.post<any>(`https://kampaniabackend.onrender.com/products`, product)
  }

  updateProducts(product: Product): Observable<any> {
    return this.http.put<any>(`https://kampaniabackend.onrender.com/${product.id}`, product)
  }

  removeProducts(product: Product): Observable<any> {
    return this.http.delete<any>(`https://kampaniabackend.onrender.com/${product.id}`)
  }

}
