import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient, Filter  } from '../models';

@Injectable()
export class IngredientService {

  private readonly INGREDIENTS_URL = 'http://localhost:8080/ingredientes';

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Ingredient[]>(`${this.INGREDIENTS_URL}`);
  }

  insert(ingredient: any){
    return this.http.post(this.INGREDIENTS_URL, ingredient);
  }

}
