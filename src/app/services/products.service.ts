import {Injectable} from '@angular/core';
import {IProduct} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : IProduct[] {
    return [
      {
        name: 'CS:G0',
        propertyName : 'csgo',
        description: 'The FPS Booster program allows you to quickly and conveniently increase FPS, reduce VAR in CS:GO, using both game settings and safe hardware overclocking.',
        iconPath: 'assets/images/cs-go/csgo-logo-CAA0A4D48A-seeklogo.png',
        imagePath: [
          'assets/images/cs-go/Games_Battles_in_the_game_Counter-Strike_Global_Offensive_098736_23.png', 'assets/images/cs-go/CS-GO-Prime-Status-Upgrade-GLOBAL-OFFENSIVE.jpg',
        ],
        priceData: [
          {
            price : 14.99,
            subscriptionTime: 1,
            additionalData: ['Increase FPS up to 30%', 'Optimize operating system Windows', 'Optimize the graphics in the game', 'Clear RAM before starting the game'],
            payUrl: ''

          },
          {
            price : 39.99,
            subscriptionTime: 3,
            additionalData: ['Increase FPS up to 30%', 'Optimize operating system Windows', 'Optimize the graphics in the game', 'Clear RAM before starting the game'],
            payUrl: ''

          },
          {
            price : 59.99,
            subscriptionTime: 6,
            additionalData: ['Increase FPS up to 30%', 'Optimize operating system Windows', 'Optimize the graphics in the game', 'Clear RAM before starting the game'],
            payUrl: ''

          },
        ]

      },
      {
        name: 'Rust',
        propertyName : 'rust',
        description: 'The FPS Booster program allows you to quickly and conveniently increase FPS, reduce VAR in Rust, using both game settings and safe hardware overclocking.',
        iconPath: 'assets/images/rust/rust-logo.webp',
        imagePath: [
          'assets/images/rust/rust-rast-rust-oboi.jpg', 'assets/images/rust/maxresdefault_live.webp',
        ],
        priceData: [
          {
            price : 14.99,
            subscriptionTime: 1,
            additionalData: ['Increase FPS up to 30%', 'Optimize operating system Windows', 'Optimize the graphics in the game', 'Clear RAM before starting the game'],
            payUrl: ''

          },
          {
            price : 39.99,
            subscriptionTime: 3,
            additionalData: ['Increase FPS up to 30%', 'Optimize operating system Windows', 'Optimize the graphics in the game', 'Clear RAM before starting the game'],
            payUrl: ''

          },
          {
            price : 59.99,
            subscriptionTime: 6,
            additionalData: ['Increase FPS up to 30%', 'Optimize operating system Windows', 'Optimize the graphics in the game', 'Clear RAM before starting the game'],
            payUrl: ''

          },
        ]

      },
      {
        name: 'Call of Duty : Vanguard',
        propertyName : 'call-of-duty-vanguard',
        description: 'The FPS Booster program allows you to quickly and conveniently increase FPS, reduce VAR in Call of Duty : Vanguard, using both game settings and safe hardware overclocking.',
        iconPath: 'assets/images/call-of-duty-vanguard/call-of-duty-vanguard-logo.webp',
        imagePath: [
          'assets/images/call-of-duty-vanguard/VGD-Campaign-Bios-TOUT.jpg',
          'assets/images/call-of-duty-vanguard/1636377846_screenshot_(94).jpg'
        ],
        priceData: [
          {
            price : 10,
            subscriptionTime: 1,
            additionalData: ['Increase FPS up to 30%', 'Optimize operating system Windows', 'Optimize the graphics in the game', 'Clear RAM before starting the game'],
            payUrl: ''
          }
        ]
      }
    ];
  }

  getProductByPropName(propertyName : string) : IProduct {
    let products = this.getProducts();
    return products.filter((value, index) => value.propertyName === propertyName)[0];
  }

  getMainImageList() : string[] {
    let products = this.getProducts();
    let result = [];
    for (let product of products) {
      result.push(product.imagePath[0]);
    }
    return result;
  }
}
