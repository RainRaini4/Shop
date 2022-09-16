import {ChangeDetectorRef, Component} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent {
  imageList: string[] = this.productsService.getMainImageList()
  products : IProduct[] = this.productsService.getProducts();
  selectedImgPath : string | undefined;
  state: string = 'in';

  constructor(
    private productsService : ProductsService,
    public cdref : ChangeDetectorRef
  ) {
  }
}
