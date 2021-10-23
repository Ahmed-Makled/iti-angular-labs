import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject(false);

  constructor() { }

  getLoader(){
    return this.isLoading;
  }

  setLoader(newValue: boolean){
    this.isLoading.next(newValue);
  }
}
