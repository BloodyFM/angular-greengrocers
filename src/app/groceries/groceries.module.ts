import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent, CartComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [CartComponent, ListComponent],
})
export class GroceriesModule {}
