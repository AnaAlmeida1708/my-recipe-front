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
  detailsRecipeActually: Array<DetailsRecipeIngredients> = [];
  detailsRecipe: Array<DetailsRecipeIngredients> = [];
  detailsRecipeScreen: Array<DetailsRecipeIngredientsSelect> = [];
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
    this.findAllIngredients();
    const code = +this.route.snapshot.params['code'];
    this.findRecipeByCode(code);
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

  updateRecipe(){
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

}
