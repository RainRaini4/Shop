import {IPriceData} from "./price-data";

export interface IProduct {
  name : string
  propertyName : string
  description : string
  iconPath : string
  imagePath : string[]
  priceData : IPriceData[]
}
