import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {CommonUtilsService} from "../../common-utils.service";
import {Title} from "@angular/platform-browser";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnDestroy{
  notFound = false;
  product : IProduct | undefined;
  titleSetter:  Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService : ProductsService,
    public commonUtils : CommonUtilsService,
    private router:Router,
    private title:Title
  ) {
    const productPropNameFromRoute = String(this.route.snapshot.paramMap.get('productPropName'));
    this.product = this.productsService.getProductByPropName(productPropNameFromRoute);
    if (!this.product) this.notFound = true;
    let titleName = this.product? this.product.name : '404'
    this.titleSetter = this.router.events.subscribe((event)=>{
      this.title.setTitle(titleName);
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnDestroy(): void {
    if (this.titleSetter) this.titleSetter.unsubscribe();
  }

}
