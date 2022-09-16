import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

const routes: Routes = [
  { path: 'main', component: MainComponent, title: 'Main'},
  { path: '',   redirectTo: '/main', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent, title: 'Products'},
  { path: 'product/:productPropName', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
