import { Injectable } from '@angular/core';
import { Food } from '../shared/model/food';
import { sampleFoods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}
  getAll():Food[]{
   return sampleFoods   
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
