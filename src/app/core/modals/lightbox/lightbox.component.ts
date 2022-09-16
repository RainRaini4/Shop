import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
  @Input() set setImageList(imageList: string[] | undefined) {
    if (imageList) {
      this.imageList = imageList
    }
  }
  imageList: string[] | undefined;


  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
