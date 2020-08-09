import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient  } from '../models';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class RecipeService {

  private readonly TYPES_URL = 'http://localhost:8084/tipos';
  private readonly CATEGORIES_URL = 'http://localhost:8084/categorias';
  private readonly PREPARE_TYPES_URL = 'http://localhost:8084/tipos-preparo';
  private readonly PREPARATION_TIME_URL = 'http://localhost:8084/receitas/tempo-preparo';
  private readonly RANDOM_SEARCH_URL = 'http://localhost:8084/receitas/aleatoria/?categoryCode='


  constructor(private http: HttpClient) { }

    typeFindAll() {
      return this.http.get<Type[]>(`${this.TYPES_URL}`);
    }

    categoryFindAll(){
      return this.http.get<Category[]>(`${this.CATEGORIES_URL}`);
    }

    typePrepareFindAll(){
      return this.http.get<PrepareType[]>(`${this.PREPARE_TYPES_URL}`);
    }

    preparationTimeFindAll(){
      return this.http.get<String[]>(`${this.PREPARATION_TIME_URL}`);
    }

    randomSearchRecipe(categoryCode: number){
      const recipe: any = this.http.get<Recipe>(`${this.RANDOM_SEARCH_URL}${categoryCode}`)
      return recipe;
    }
}
