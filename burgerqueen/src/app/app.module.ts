import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TagMakeOrderComponent } from './tag-make-order/tag-make-order.component';
import { TagOrderDeliveredComponent } from './tag-order-delivered/tag-order-delivered.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { InputComponent } from './input/input.component';
import { CategoryComponent } from './category/category.component';

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
