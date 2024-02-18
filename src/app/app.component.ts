import { Component, VERSION, OnInit } from '@angular/core';
import { Cart, CartItem } from './cart/cart.module';
import { CartService } from './cart.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });              
  }
}
