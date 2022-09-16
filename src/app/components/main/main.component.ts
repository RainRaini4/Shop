import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  imageList: string[] = this.productsService.getMainImageList()

  constructor(
    private router: Router,
    private productsService : ProductsService
  ) {
  }

  onClick() : void {
    this.router.navigate([ '/product' ])
  }

}
