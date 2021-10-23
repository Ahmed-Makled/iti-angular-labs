import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,    AppRoutingModule,    HttpClientModule , 

  ],
  exports: [FormsModule, ReactiveFormsModule, NavbarComponent ,    AppRoutingModule,    HttpClientModule , 

  ],
})
export class SharedModule {}
