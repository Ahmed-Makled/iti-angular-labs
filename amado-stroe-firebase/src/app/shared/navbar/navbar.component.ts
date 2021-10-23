import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  counter: BehaviorSubject<number> | undefined;
  totalItem: any;
  constructor(
    private counterService: CounterService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // this.counter = this.counterService.getCounter();

    this.cartService.getProducts().subscribe((data) => {
      this.totalItem = data.length;
    });
  }
}
