import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroceriesModule } from './groceries/groceries.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GroceriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
