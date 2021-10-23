import { Iproduct } from './../../models/iproduct';
import { Component, OnInit, } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  isLoading: any ;

  productList!: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
   
  this.productService.fetchProducts().subscribe((data)=>    this.productList =Object.assign(data))



  }

  ProductItemRecived(item: Iproduct) {
    console.log('FROM PARENT', item);
  }

  addNewProduct(){
    this.productService.AddNewProduct()
  }

  updateProduct(id:any,data:{}){

    this.productService.updateProdct(id,data)
  }

  removeProduct(id:any){
    this.productService.removeProduct(id)
  }
}
