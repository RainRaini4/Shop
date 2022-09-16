import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() set setImageList(imageList: string[] | undefined) {
    if (imageList) {
      this.imageList = imageList
    }
  }

  public imageList: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
