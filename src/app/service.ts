import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs'
import {Product} from "./product";

@Injectable({
  providedIn: "root"
})

export class ApigetProducts {
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any>("http://localhost:5000/products")
  }

  createProducts(product: Product): Observable<any> {
    return this.http.post<any>(`http://localhost:5000/products`, product)
  }

  updateProducts(product: Product): Observable<any> {
    return this.http.put<any>(`http://localhost:5000/products/${product.id}`, product)
  }

  removeProducts(product: Product): Observable<any> {
    return this.http.delete<any>(`http://localhost:5000/products/${product.id}`)
  }

}
