import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeService } from 'src/app/services/shoe.service';
import { Shoe } from 'src/app/shared/models/shoe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shoes : Shoe[]=[];
  constructor(private shoeService : ShoeService,activatedRoute:ActivatedRoute)
  { 
    activatedRoute.params.subscribe((params)=>
    {
      if(params['searchTerm'])
        this.shoes = this.shoeService.getAllShoeBySearchTerm(params['searchTerm']);
        else if(params['tag'])
        this.shoes = this.shoeService.getAllShoeByTag(params['tag']);
        else  
        this.shoes = shoeService.getAll();
    });
    
  }
  
  ngOnInit(): void {
      
  }
}
 