export interface IPriceData {
  subscriptionTime : number
  timeUnit? : string
  price : number
  priceUnit? : string
  additionalData? : string[]
  payUrl: string
}
