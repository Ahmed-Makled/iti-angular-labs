import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   _product: any;
   newId!:any
  constructor(
    private router: Router,
    private http: HttpClient,
    private db: Firestore
    
  ) {}


// Fetch Products
fetchProducts() {
  const dataCollection = collection(this.db, 'products');
    return collectionData(dataCollection)
  }
  // get Product by id
  getProduct(id: any) {
    const documentData = doc(this.db,`/products/${id}`)
    return docData(documentData)
  }

  //add new Porduct
  AddNewProduct() {
    setDoc(doc(collection(this.db, 'products')), {
      id:1 ,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count_in_stock: 0,
      },
    });
  }

  //update product
  updateProdct(id: any, data: {}) {
    setDoc(doc(this.db, 'product', `${id}`), data, { merge: true });
  }
  //remove product

  removeProduct(id: any, ){
    deleteDoc(doc(this.db , 'product' , `${id}`));
  }
}
