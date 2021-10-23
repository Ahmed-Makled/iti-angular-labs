import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<any>(0);
  public cartItemList : any =[]

  constructor() { }

  getCounter(){
    return this.counter;
  }

  setCounter(newCounter: number){
    this.counter.next(newCounter);
  }
}
