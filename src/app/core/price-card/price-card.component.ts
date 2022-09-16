import {Component, Input, OnInit} from '@angular/core';
import {IPriceData} from "../../models/price-data";
import {CommonUtilsService} from "../../common-utils.service";

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent implements OnInit {
  @Input() priceData: IPriceData | undefined;

  constructor(
    public commonUtils : CommonUtilsService
  ) { }

  ngOnInit(): void {
  }

}
