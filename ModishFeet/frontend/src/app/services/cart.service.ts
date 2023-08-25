import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shoe } from '../shared/models/shoe';
import { CartItem } from '../shared/models/cartItem';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart : Cart = new Cart();
  private cartSubject : BehaviorSubject<Cart> =new BehaviorSubject(this.cart)

  constructor(){ }
  addToCart(shoe:Shoe):void
  {
    let cartItem = this.cart.items.find(item =>item.shoe.id==shoe.id)
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(shoe))
  }
  removeFromCart(shoeId:String):void{
    this.cart.items= this.cart.items.filter(item=>item.shoe.id!=shoeId);
  }
  changeQuantity(shoeId:string,quantity:number)
  {
    let cartItem=this.cart.items.find(item=>item.shoe.id===shoeId)
    if(!cartItem)
    return;
    cartItem.quantity=quantity;
    cartItem.price= quantity * cartItem.shoe.Price;  
  }
  clearCart()
  {
    this.cart = new Cart();
  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  setCartToLocalStorage():void
  {
      this.cart.totalPrice=this.cart.items.reduce((previousSum,currentItem)=>
      previousSum+currentItem.price,0);
      this.cart.totalCount=this.cart.items.reduce((previousSum,currentItem)=>
      previousSum+currentItem.quantity,0);

      let cartJson = JSON.stringify(this.cart);
      localStorage.setItem('cart',cartJson);
  }
}
 