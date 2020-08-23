import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient, DetailsRecipeIngredientsSelect } from '../models';
import { RecipeService, IngredientService } from '../services';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  @ViewChild('recipeForm', { static: true }) recipeForm: NgForm;

  types: Array<Type>;
  categories: Array<Category>;
  prepareTypes: Array<PrepareType>;
  ingredients: Array<Ingredient>;
  recipe: Recipe;
  detailsRecipe: Array<DetailsRecipeIngredients> = [];
  detailsRecipeScreen: Array<DetailsRecipeIngredientsSelect> = [];
  details: Array<DetailsRecipeIngredients>;
  select: boolean;
  recipeResponse: Recipe;

  constructor(
    private recipeService : RecipeService, 
    private ingredientService: IngredientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.typeFindAll();
    this.categoryFindAll();
    this.prepareTypeFindAll();
    const code = +this.route.snapshot.params['code'];
    this.findRecipeByCode(code);
    this.findDetailsRecipeByRecipeCode(code);
    //this.selectedIngredients();
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
/*
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
*/
  selectedIngredients(){
   for(let d in this.details){
     let de = this.details[d]
     let ingredient: Ingredient = new Ingredient();
     ingredient.code = de.ingredient.code
     ingredient.name = de.ingredient.name
     let detailRecipe: DetailsRecipeIngredients = new DetailsRecipeIngredients();
     detailRecipe.ingredient = ingredient
     detailRecipe.quantity = de.quantity
     let detailS: DetailsRecipeIngredientsSelect = new DetailsRecipeIngredientsSelect(); 
       detailS.details = detailRecipe;
       detailS.select = true;
       this.detailsRecipeScreen.push(detailS);
   }
   alert('Form: ' + JSON.stringify(this.details));
  }

  get detailsRecipe2(): DetailsRecipeIngredients [] {
    if(this.recipe.detailsRecipeIngredients == undefined){
      var detailsList: Array<DetailsRecipeIngredients> = [];
      return detailsList;
    }else{
      return this.recipe.detailsRecipeIngredients;
    }
  }

  updateRecipe(){
    //this.selectedIngredients()
    this.recipeService.updateRecipe(this.recipe.code, this.recipe).subscribe(data => this.recipe = data);
    this.router.navigate(["receitas/gerenciar"])
  }
  /*
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
*/
  findRecipeByCode(code: number){
    this.recipeService.findRecipeByCode(code).subscribe(data => this.recipe = data);
  }
  
  findDetailsRecipeByRecipeCode(code: number){
    this.recipeService.findDetailsRecipeByRecipeCode(code).subscribe(datas => this.details = datas);
  }
  
}
