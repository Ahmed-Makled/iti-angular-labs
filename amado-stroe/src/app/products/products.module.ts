import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
})
export class ProductsModule {}
