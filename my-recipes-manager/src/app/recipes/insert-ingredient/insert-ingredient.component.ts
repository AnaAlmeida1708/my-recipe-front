import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

import { IngredientService } from '../services';
import { Ingredient } from './../models/ingredient.model';

@Component({
  selector: 'modal-ingredient',
  templateUrl: './insert-ingredient.component.html',
  styleUrls: ['./insert-ingredient.component.css']
})
export class InsertIngredientComponent implements OnInit {

  @ViewChild('formIngredient', { static: true }) formIngredient: NgForm;
  ingredient: any;
  
  @Input() ingredients: Ingredient [] = new Array<Ingredient>();

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredient = {};
  }
  
  insert(formIngredient: NgForm){
    this.ingredientService.insert(this.ingredient).subscribe(data => {
      this.ingredients.push(data);
    })
  }
  
}
