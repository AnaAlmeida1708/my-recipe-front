import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Type, PrepareType, Category, Recipe } from '../models';
import { RecipeService } from '../services';

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
  recipe: Recipe;
  select: boolean;
  recipeResponse: Recipe;

  constructor(
    private recipeService : RecipeService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.typeFindAll();
    this.categoryFindAll();
    this.prepareTypeFindAll();
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

  updateRecipe(){
    this.recipeService.updateRecipe(this.recipe.code, this.recipe).subscribe(data => this.recipe = data);
    this.router.navigate(["receitas/gerenciar"])
  }

  findRecipeByCode(code: number){
    this.recipeService.findRecipeByCode(code).subscribe(data => this.recipe = data);
  }
  
}
