import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Type, PrepareType,  Category, Recipe,   } from '../models';
import { RecipeService } from '../services';

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
  recipe: Recipe;
  type: Type;
  category: Category;
  prepareType: PrepareType;
  select: boolean;
  recipeResponse: Recipe;

  constructor(
    private recipeService : RecipeService, 
    private router: Router) { }

  ngOnInit(): void {
    this.typeFindAll();
    this.categoryFindAll();
    this.prepareTypeFindAll();
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

  insert(recipeForm: NgForm){
    this.recipeService.insertRecipe(this.recipe).subscribe(data => this.recipeResponse = data);
    this.router.navigate(["/receitas/gerenciar"])
  }

}
