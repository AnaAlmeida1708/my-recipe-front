import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Type, PrepareType, Category, Recipe, Filter  } from '../models';
import { RecipeService } from '../services';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  @ViewChild('formFindRecipe', { static: true }) formFindRecipe: NgForm;

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
  filter: Filter;
  codeRecipe: number;
  receiveRecipe: Recipe = new Recipe();

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.typeFindAll();
    this.categoryFindAll();
    this.prepareTypeFindAll();
    this.preparationTimeFindAll();
    this.categorySelected=3;
    this.recipes;
    this.mainSuggestion();
    this.dessertSuggestion();
    this.saladSuggestion();
    this.meatSuggestion();
    this.filter = new Filter();
    this.filter.prepareTypeCode=0;
    this.filter.typeCode=0;
    this.filter.categoryCode=0;
    this.filter.preparationTime="";
    this.filter.tested=false;
    this.filter.favorite=false;
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

  findRecipesByFilter(){
    var recipeList:  Array<Recipe> = [];
    this.recipes = recipeList;
    this.recipeService.findRecipesByFilter(this.filter).subscribe(datas => this.recipes = datas);
    const listRecipe: Recipe []= this.recipes;
    if(listRecipe !== undefined){
      this.recipes = listRecipe;
    }
  }

  addRecipe(recipe: Recipe){
    this.receiveRecipe = recipe;
  }
  
}
