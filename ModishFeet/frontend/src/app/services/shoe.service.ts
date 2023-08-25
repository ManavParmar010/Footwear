import { Injectable } from '@angular/core';
import { Shoe } from '../shared/models/shoe';
import { sample_shoes, sample_tag } from 'src/data';
import { tag } from '../shared/models/Tag';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  constructor() { }
   getAll():Shoe[]{
    return sample_shoes
   }
   getAllShoeBySearchTerm(searchTerm:string)
   {
    return this.getAll().filter(shoe => shoe.name.toLowerCase().includes(searchTerm.toLowerCase()));
   }
   getAllTag():tag[]{
      return sample_tag
   }
   getAllShoeByTag(tag:string):Shoe[] 
   {
    return tag==='All'?this.getAll():
    this.getAll().filter(shoe => shoe.categoryName.toLowerCase().includes(tag.toLowerCase()))
   }
   getShoeById(shoeId:string):Shoe
   {
    return this.getAll().find(shoe => shoe.id==shoeId) ?? new Shoe();
   }
}
