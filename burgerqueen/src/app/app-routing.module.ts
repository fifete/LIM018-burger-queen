import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TagMakeOrderComponent } from './components/tag-make-order/tag-make-order.component';
import { TagOrderDeliveredComponent } from './components/tag-order-delivered/tag-order-delivered.component';

const routes: Routes = [
  { path: "login" , component: LoginComponent},
  { path: "order" , component: TagMakeOrderComponent},
  { path: "deliver" , component: TagOrderDeliveredComponent},
  { path: "", redirectTo: "/login" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
