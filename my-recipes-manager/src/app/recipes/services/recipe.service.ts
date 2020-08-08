import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient  } from '../models';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class RecipeService {

  private readonly TYPES_URL = 'http://localhost:8084/tipos';

  constructor(private http: HttpClient) { }

    typeFindAll() {
      return this.http.get<any[]>(`${this.TYPES_URL}`);
    }
}
