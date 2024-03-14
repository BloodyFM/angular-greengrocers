import { Component } from '@angular/core';
import { CartItem, Item } from 'src/app/models/item';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private readonly groceriesService: GroceriesService) {}

  items: CartItem[] = this.groceriesService.cartItems;

  updateItems = (): void => {
    this.items = this.groceriesService.cartItems;
  };

  cartItemToItem = (item: CartItem): Item => {
    return {
      id: item.id,
      name: item.name,
      type: item.type,
      price: item.price,
    };
  };

  addToCart = (item: CartItem): void => {
    this.groceriesService.addToCart(this.cartItemToItem(item));
    this.updateItems();
  };

  removeFromCart = (item: CartItem): void => {
    this.groceriesService.removeFromCart(this.cartItemToItem(item));
    this.updateItems();
  };
}
