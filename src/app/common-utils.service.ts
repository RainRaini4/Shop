import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor(@Inject(DOCUMENT) private document: Document,) { }

  goToUrl(href: string | undefined) : void {
    if (href) this.document.location.href = href;
  }
}
