import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { CartItem, Item } from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  http = inject(HttpClient);

  cartItems: CartItem[] = [];
  private totalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  public total$: Observable<number> = this.totalSubject.asObservable();

  updateTotal(value: number) {
    this.totalSubject.next(value);
  }

  get shopItems(): Promise<Item[]> {
    return firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}groceries`)
    );
  }

  addToCart = (item: Item): void => {
    const index: number = this.cartItems.findIndex((i) => i.id === item.id);
    if (index === -1) {
      const newCartItem: CartItem = {
        id: item.id,
        name: item.name,
        type: item.type,
        price: item.price,
        amount: 1,
      };
      this.cartItems.push(newCartItem);
    } else {
      this.cartItems[index].amount++;
    }
    this.calculateTotal();
    console.log(this.cartItems);
  };

  removeFromCart = (item: Item): void => {
    const index: number = this.cartItems.findIndex((i) => i.id === item.id);
    if (index === -1) {
      console.log("Can't remove an item that is not in the cart!");
    } else if (this.cartItems[index].amount <= 1) {
      this.cartItems = [...this.cartItems.filter((i) => i.id !== item.id)];
    } else {
      this.cartItems[index].amount--;
    }
    this.calculateTotal();
    console.log(this.cartItems);
  };

  calculateTotal = (): void => {
    let newTotal: number = 0.0;
    this.cartItems.forEach((item) => {
      newTotal += item.amount * item.price;
    });
    this.updateTotal(newTotal);
    console.log(this.total$);
  };
}
