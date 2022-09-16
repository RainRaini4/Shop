import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CommonUtilsService} from "../../common-utils.service";
import {Router} from "@angular/router";
import {Subscription, timer} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LightboxComponent} from "../modals/lightbox/lightbox.component";

export const fade = [
  trigger('fade', [
    state('in', style({ 'opacity': '1' })),
    state('out', style({ 'opacity': '0.2' })),
    transition('* <=> *', [
      animate(200)
    ])
  ])
];

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.scss'],
  animations: [fade]
})

export class BigPictureComponent {
  @Input() set setImageList(imageList: string[] | undefined) {
    if (imageList) {
      this.mainPageImg = imageList[0];
      this.imageList = imageList
      if (this.imageList.length > 1) this.startImgSwitch();
    }
  }
  @Input() set changeImgByPropName(propId: string | undefined) {
    if (propId) this.switchImageNow(propId);
  }
  imageList: string[] = [];
  mainPageImg : string | undefined;
  state: string = 'in';
  imageIndex : number = 0;
  switchImg$ : Subscription | undefined;
  hoveredPropName : string = '';

  switchImg(propName : string) : void {
    if (this.imageList) {
      if (propName) this.imageIndex = this.imageList.findIndex(x => x === propName);
      else this.imageIndex = this.imageIndex < this.imageList.length - 1 ? ++this.imageIndex : 0;
      this.mainPageImg = this.imageList[this.imageIndex];
      this.hoveredPropName = '';
    }
  }

  onDone(event : any) : void {
    this.cdref.detectChanges()
    if (this.state === 'out') {
      this.switchImg(this.hoveredPropName)
      this.state = 'in'
    }
  }

  constructor(
    private productService : ProductsService,
    private cdref: ChangeDetectorRef,
    private modalService: NgbModal
  ) {
  }

  startImgSwitch() : void {
    this.switchImg$ = timer(10000,10000).subscribe((x =>{this.state = 'out';}));
  }

  stopImgSwitch() : void {
    if (this.switchImg$ != undefined) this.switchImg$.unsubscribe();
  }

  switchImageNow(propName : string) : void {
    if (this.imageList && this.imageList.findIndex(x => x === propName) !== this.imageIndex) this.state = 'out'; this.cdref.detectChanges()
    this.hoveredPropName = propName;
    this.stopImgSwitch();
  }

  openLightbox() {
    const modalRef = this.modalService.open(LightboxComponent, {size: 'xl', centered: true});
    modalRef.componentInstance.setImageList = this.imageList;
  }

}
