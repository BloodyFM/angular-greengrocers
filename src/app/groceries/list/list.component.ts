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
  filter: string = 'none';
  sort: string = 'none';

  async ngOnInit() {
    this.items = await this.groceriesService.shopItems;
    this.filterItems();
    console.log(this.items);
  }

  sortItems = () => {
    if (this.sort === 'price') {
      this.items.sort((a, b) => a.price - b.price);
    }
    if (this.sort === 'name') {
      this.items.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  filterItems = () => {
    if (this.filter !== 'none') {
      this.items = this.items.filter((i) => i.type === this.filter);
    }
    this.sortItems();
  };

  filterClicked = async (newFilter: string) => {
    this.items = await this.groceriesService.shopItems;
    this.filter = newFilter;
    this.filterItems();
  };

  sortClicked = async (newSort: string) => {
    this.items = await this.groceriesService.shopItems;
    this.sort = newSort;
    this.filterItems();
  };

  addToCart = (item: Item): void => {
    this.groceriesService.addToCart(item);
  };
}
