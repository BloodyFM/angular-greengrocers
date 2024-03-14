import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private readonly groceriesService: GroceriesService) {}

  items: Item[] = [];

  async ngOnInit() {
    this.items = await this.groceriesService.shopItems;
    console.log(this.items);
  }

  addToCart = (item: Item): void => {
    this.groceriesService.addToCart(item);
  };
}
