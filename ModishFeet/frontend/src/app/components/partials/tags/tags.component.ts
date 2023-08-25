import { Component, OnInit } from '@angular/core';
import { ShoeService } from 'src/app/services/shoe.service';
import { tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit{

  tag?:tag[];
  constructor(shoeService:ShoeService)
  {
    this.tag=shoeService.getAllTag()
  }
  ngOnInit(): void {
      
  }
}
