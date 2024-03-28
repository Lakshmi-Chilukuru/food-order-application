import { Injectable } from '@angular/core';
import { Food } from '../shared/model/food';
import { sampleFoods, sample_tags } from 'src/data';
import { Tags } from '../shared/model/tag';

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
  getAllTags():Tags[]{
    return sample_tags;
  }
  getAllFoodByTags(tag:string):Food[]{
    if( tag=== "All"){
      return this.getAll()
    }
    else{
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
}
getfoodById(foodId:string){
  return this.getAll().filter(food=>food.id)?? new Food();
  
}
}
