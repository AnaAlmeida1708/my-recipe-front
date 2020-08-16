import { Component, OnInit,
  //EventEmitter,
  Input,
  //Output
} from '@angular/core';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient, Filter  } from '../models';

@Component({
  selector: 'modal-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit {

    @Input() receiveRecipe: Recipe = new Recipe();

  constructor() { }

  ngOnInit(): void {
  }

  get testedRecipe(): String {
    if(this.receiveRecipe.tested){
      return 'Sim'
    } else {
      return 'Não'
    }
  }

  get favoriteRecipe(): String {
    if(this.receiveRecipe.favorite){
      return 'Sim'
    } else {
      return 'Não'
    }
  }
  
  get detailsRecipe(): DetailsRecipeIngredients [] {
    if(this.receiveRecipe.detailsRecipeIngredients == undefined){
      var detailsList: Array<DetailsRecipeIngredients> = [];
      return detailsList;
    }else{
      return this.receiveRecipe.detailsRecipeIngredients;
    }
  }

  get categoryDescription(): String {
    if(this.receiveRecipe.category == undefined){
      return ""
    }else{
      return this.receiveRecipe.category.description;
    }
  }

  get prepareType(): String {
    if(this.receiveRecipe.prepareType == undefined){
      return ""
    }else{
      return this.receiveRecipe.prepareType.prepareType;
    }
  }
  
}
