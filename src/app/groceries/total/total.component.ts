import { Component } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  constructor(private readonly groceriesService: GroceriesService) {}

  total: number = 0;

  ngOnInit(): void {
    this.groceriesService.total$.subscribe((newTotal) => {
      this.total = newTotal;
    });
  }
}
