import { Shoe } from "./shoe";

export class CartItem
{
    constructor(public shoe:Shoe){ }
    quantity:number = 1 ;
    price: number = this.shoe.Price;
}