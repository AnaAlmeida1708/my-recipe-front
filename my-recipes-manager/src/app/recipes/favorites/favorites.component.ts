import { Component, OnInit } from '@angular/core';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient, Filter  } from '../models';
import { RecipeService } from '../services';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteRecipes:  Array<Recipe> = [];
  recipe: Recipe = new Recipe();

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.findRecipesFavorite();
  }

  findRecipesFavorite(){
    this.recipeService.findRecipesFavorite().subscribe(datas => this.favoriteRecipes = datas);
  }

  addRecipe(recipe: Recipe){
    this.recipe = recipe;
  }

}
