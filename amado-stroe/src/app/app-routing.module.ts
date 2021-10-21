import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ShopComponent } from './views/shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
