import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BigPictureComponent } from './big-picture/big-picture.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { LightboxComponent } from './modals/lightbox/lightbox.component';



@NgModule({
    declarations: [
        ErrorPageComponent,
        BigPictureComponent,
        PriceCardComponent,
        CarouselComponent,
        LightboxComponent
    ],
  exports: [
    BigPictureComponent,
    ErrorPageComponent,
    PriceCardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
  ]
})
export class CoreModule { }
