import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private router: Router, private http: HttpClient) {}

  baseURL = 'https://fakestoreapi.com';

  // Fetch Products
  fetchProducts() {
 return   this.http .get(`${this.baseURL}/products`,{
  params: {
    limit: '5',
  }}
  
  )
      
  }

  // get Product by id
  getProduct(id: any) {
    return this.http.get(`${this.baseURL}/products/${id}`)
  }
  }
