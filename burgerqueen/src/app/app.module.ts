import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { TagMakeOrderComponent } from './components/tag-make-order/tag-make-order.component';
import { TagOrderDeliveredComponent } from './components/tag-order-delivered/tag-order-delivered.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { InputComponent } from './components/input/input.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuItemComponent,
    TagMakeOrderComponent,
    TagOrderDeliveredComponent,
    OrderTableComponent,
    OrderSummaryComponent,
    InputComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
