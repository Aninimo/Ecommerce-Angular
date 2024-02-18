import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

import { Cart, CartItem } from '../cart/cart.module';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  menuOpen = false;
  showCartItems = false;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(private cartService: CartService, private http: HttpClient) { }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  toggleCartItems() {
    this.showCartItems = !this.showCartItems;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onCheckout(): void {
    this.http
      .post('https://df4d3847-ae15-4d50-b40c-0dbd5c6a7b86-00-1hgl0n1bzo6xi.janeway.replit.dev/checkout', {
        items: this.cart.items,
      })
    .subscribe(async (res: any) => {
      let stripe = await loadStripe('your token');
      stripe?.redirectToCheckout({
        sessionId: res.id,
      });
    })
  }
}
