import { RequestInterceptor } from './interceptor/request.interceptor';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';

//componant
import { AppComponent } from './app.component';
import { ShopComponent } from './views/shop/shop.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ProductsModule,
    AuthModule,
    
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:RequestInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
