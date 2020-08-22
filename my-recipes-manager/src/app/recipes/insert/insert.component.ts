import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient, DetailsRecipeIngredientsSelect } from '../models';
import { RecipeService, IngredientService } from '../services';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  @ViewChild('recipeForm', { static: true }) recipeForm: NgForm;

  types: Array<Type>;
  categories: Array<Category>;
  prepareTypes: Array<PrepareType>;
  ingredients: Array<Ingredient>;
  recipe: Recipe;
  type: Type;
  category: Category;
  prepareType: PrepareType;
  detailsRecipe: Array<DetailsRecipeIngredients> = [];
  detailsRecipeScreen: Array<DetailsRecipeIngredientsSelect> = [];
  select: boolean;
  recipeResponse: Recipe;

  constructor(
    private recipeService : RecipeService, 
    private ingredientService: IngredientService,
    private router: Router) { }

  ngOnInit(): void {
    this.typeFindAll();
    this.categoryFindAll();
    this.prepareTypeFindAll();
    this.findAllIngredients();
    this.recipe = new Recipe();
    this.type = new Type();
    this.type.code = 1;
    this.category = new Category();
    this.category.code = 1;
    this.prepareType = new PrepareType();
    this.prepareType.code = 1;
    this.recipe.tested = false;
    this.recipe.favorite = false;
    this.recipe.type = this.type;
    this.recipe.category = this.category;
    this.recipe.prepareType = this.prepareType;
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

  findAllIngredients(){
    this.ingredientService.findAll().subscribe(datas => {
      this.ingredients = datas;
      for(let i in this.ingredients){
        let detailRecipe: DetailsRecipeIngredients = new DetailsRecipeIngredients();
        detailRecipe.ingredient = this.ingredients[i];
        let details: DetailsRecipeIngredientsSelect = new DetailsRecipeIngredientsSelect();
        details.details = detailRecipe;
        details.select = false;
        this.detailsRecipeScreen.push(details);
      }
    });
  }

  insert(recipeForm: NgForm){
    this.addDetail();
    //alert('Form: ' + JSON.stringify(this.recipeForm.value));
    //alert('Form: ' + JSON.stringify(this.recipe));
    this.recipeService.insertRecipe(this.recipe).subscribe(data => this.recipeResponse = data);
    //this.router.navigate(["/home"])
  }

  addDetail(){
    for(let d in this.detailsRecipeScreen){
      let drs = this.detailsRecipeScreen[d];
      if( drs.select == true){
        let detailRecipe: DetailsRecipeIngredients = new DetailsRecipeIngredients();
        let ingredient: Ingredient = new Ingredient();
        ingredient.code = drs.details.ingredient.code;
        detailRecipe.ingredient = ingredient;
        detailRecipe.quantity = drs.details.quantity;
        this.detailsRecipe.push(detailRecipe);
      }
    }
    this.recipe.detailsRecipeIngredients = this.detailsRecipe;
  }
}
