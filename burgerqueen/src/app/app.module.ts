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
import { ButtonComponent } from './components/button/button.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AuthtenticationService } from './services/authtentication.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const firebaseConfig = {
  apiKey: "AIzaSyA26CQPFXl-j1Vc2BB98STFsr8qUvohU14",
  authDomain: "burgerqueenproject.firebaseapp.com",
  projectId: "burgerqueenproject",
  storageBucket: "burgerqueenproject.appspot.com",
  messagingSenderId: "273864718221",
  appId: "1:273864718221:web:6a24d5cf43327eb8bf6fc4"
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, FontAwesomeModule // storage
  ],
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
    CategoryComponent,
    ButtonComponent,
    ButtonMenuComponent
  ],
  providers: [AuthtenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
