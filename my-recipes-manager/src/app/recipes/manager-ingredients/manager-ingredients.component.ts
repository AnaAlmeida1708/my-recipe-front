import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../models';
import { IngredientService } from '../services';

@Component({
  selector: 'app-manager-ingredients',
  templateUrl: './manager-ingredients.component.html',
  styleUrls: ['./manager-ingredients.component.css']
})
export class ManagerIngredientsComponent implements OnInit {

  listIngredients: Array<Ingredient> = [];
  ingredient: Ingredient = new Ingredient();

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.findAllIngredients();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredient = ingredient
  }

  findAllIngredients(){
    this.ingredientService.findAll().subscribe(datas => this.listIngredients = datas);
  }

}
