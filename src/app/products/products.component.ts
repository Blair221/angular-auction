import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle: string = "Product List";

  imageWidth: number = 50;

  imageMargin: number = 2;

  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Rustic Dining Room Table",
      "productCode": "GDB-0090",
      "releaseDate": "March 9, 2019",
      "description": "Old wooden dining room table, made in an old baroque style",
      "price": 399.99,
      "starRating": 4.6,
      "imageUrl": "placeholder"
    },
    {
      "productId": 5,
      "productName": "Really cool Viking Hammer",
      "productCode": "GDB-0021",
      "releaseDate": "September 21, 2019",
      "description": "Old wooden hammer, made in an old viking style",
      "price": 599.99,
      "starRating": 5.0,
      "imageUrl": "placeholder"
    }
  ]

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 )
  } 

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  constructor() { 
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  ngOnInit(): void {
    console.log("What is up my dudes");
  }

}
