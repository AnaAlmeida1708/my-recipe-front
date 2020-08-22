import { Component, OnInit } from '@angular/core';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient, Filter  } from '../models';
import { RecipeService } from '../services';


@Component({
  selector: 'app-manager-recipes',
  templateUrl: './manager-recipes.component.html',
  styleUrls: ['./manager-recipes.component.css']
})
export class ManagerRecipesComponent implements OnInit {

  listRecipes:  Array<Recipe> = [];
  recipe: Recipe = new Recipe();

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.findAllRecipes();
  }

  addRecipe(recipe: Recipe){
    this.recipe = recipe;
  }

  findAllRecipes(){
    this.recipeService.findAllRecipes().subscribe(datas => this.listRecipes = datas);
  }

}
