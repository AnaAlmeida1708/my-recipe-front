import { Component, OnInit } from '@angular/core';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient  } from '../models';
import { RecipeService } from '../services';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  types: Array<Type>;
  categorySelected: number;
  categories: Array<Category>;
  prepareTypes: Array<PrepareType>;
  preparationTime: Array<String>;
  recipe: Recipe;
  recipes:  Array<Recipe> = [];
  mainRecipe: Recipe;
  meatRecipe: Recipe;
  saladRecipe: Recipe;
  dessertRecipe: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.typeFindAll();
    this.categoryFindAll();
    this.prepareTypeFindAll();
    this.preparationTimeFindAll();
    this.categorySelected=2;
    this.recipes;
    this.mainSuggestion();
    this.dessertSuggestion();
    this.saladSuggestion();
    this.meatSuggestion();
  }

  
  typeFindAll() {
    this.recipeService.typeFindAll().subscribe(datas => this.types = datas);
  }
  

  categoryFindAll(){
      this.recipeService.categoryFindAll().subscribe(datas => this.categories = datas);
  }

  prepareTypeFindAll(){
    this.recipeService.typePrepareFindAll().subscribe(datas => this.prepareTypes = datas);
  }

  preparationTimeFindAll(){
      this.recipeService.preparationTimeFindAll().subscribe(datas => this.preparationTime = datas);
  }

  randomSearchRecipe(){
    var recipesList:  Array<Recipe> = [];
    this.recipes = recipesList;
    this.recipeService.randomSearchRecipe(this.categorySelected).subscribe(data => this.recipe = data);
    const recipe2: Recipe = this.recipe;
    if(recipe2 !== undefined){
        this.recipes.push(recipe2);
    }
  }

  
  mainSuggestion(){
    this.recipeService.mainSuggestion().subscribe(data => this.mainRecipe = data);
  }

  
  meatSuggestion(){
    this.recipeService.meatSuggestion().subscribe(data => this.meatRecipe = data);
  }

  saladSuggestion(){
    this.recipeService.saladSuggestion().subscribe(data => this.saladRecipe = data);
  }

  dessertSuggestion(){
    this.recipeService.dessertSuggestion().subscribe(data => this.dessertRecipe= data);
  }
  
}
