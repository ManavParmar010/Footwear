import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeService } from 'src/app/services/shoe.service';
import { Shoe } from 'src/app/shared/models/shoe';
import { sample_shoes } from 'src/data';

@Component({
  selector: 'app-shoe-pages',
  templateUrl: './shoe-pages.component.html',
  styleUrls: ['./shoe-pages.component.scss']
})
export class ShoePagesComponent implements OnInit {
  shoe!:Shoe;
  constructor(activatedRoute:ActivatedRoute,shoeService:ShoeService)
  {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.shoe = shoeService.getShoeById(params['id'])
    })
  
  }
  ngOnInit(): void {
      
  }
}
