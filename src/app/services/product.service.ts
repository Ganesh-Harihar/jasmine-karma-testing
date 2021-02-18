import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    { name: 'Good', price: 100 },
    { name: 'Good A', price: 10 },
    { name: 'Good B', price: 140 },
    { name: 'Bad', price: 110 },
    { name: 'Bad A', price: 210 },
    { name: 'Hot', price: 20 },
    { name: 'Cold', price: 10000 },
  ];

  constructor() { }

  public getProductList(): Observable<ProductModel[]> {
    return of(this.products);
  }

  public filterProductList(searchText: string): Promise<ProductModel[]> {
    return of(this.products.filter(product =>
      product.name.toLocaleLowerCase().indexOf(searchText) > -1
    )).toPromise();
  }
}
