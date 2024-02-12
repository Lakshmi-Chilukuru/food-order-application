import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public foods:Food[]=[]
  constructor(foodService:FoodService){
    this.foods=foodService.getAll()   //get all data return from dummy data
  }
  ngOnInit(): void {
    
  }
}
