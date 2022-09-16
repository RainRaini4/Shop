import { Component, OnInit } from '@angular/core';
import {CommonUtilsService} from "../../common-utils.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapse: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
