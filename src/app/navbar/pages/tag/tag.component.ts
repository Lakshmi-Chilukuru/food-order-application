import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tags } from 'src/app/shared/model/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  public tags?:Tags[]=[]
  constructor(activateRoute:ActivatedRoute,public foodService:FoodService){
    // activateRoute.params.subscribe((params)=>{
    //   if(params.tag){
    //       this.tags=this.foodService.getAllFoodByTags(params.tag)
    //   }
    //   else{
    //     this.tags=this.foodService.getAllTags()
    //   }
    // })
    this.tags=this.foodService.getAllTags()
  }
  ngOnInit(): void {
    
  }
}
