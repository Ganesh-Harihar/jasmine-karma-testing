import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-async-testing',
  templateUrl: './async-testing.component.html',
  styleUrls: ['./async-testing.component.scss']
})
export class AsyncTestingComponent implements OnInit {

  searchText: string = '';

  products: Array<ProductModel> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
    })
  }

  filterProductList(): void {
    this.productService.filterProductList(this.searchText).then((data) => {
      this.products = data;
    })
  }
}
