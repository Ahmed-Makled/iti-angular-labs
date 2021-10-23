import { CartComponent } from './products/cart/cart.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductItemComponent } from './products/product-item/product-item.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShopComponent } from './views/shop/shop.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  
  },
  {
    path: 'login',
    component: LoginComponent,
  
  },
  {
    path: 'register',
    component: RegisterComponent,
  
  },
  {
    path: 'shop',
    component: ShopComponent,
  
  },
  {
    path: 'shop/:id',
    component: ProductDetailsComponent,
  
  },
  {
    path: 'cart',
    component: CartComponent,
  
  },
    { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
