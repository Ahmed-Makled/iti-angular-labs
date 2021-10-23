import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
})
export class ProductsModule {}
