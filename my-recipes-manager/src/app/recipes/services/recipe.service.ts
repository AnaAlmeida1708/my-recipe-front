import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient, Filter  } from '../models';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class RecipeService {

  private readonly TYPES_URL = 'http://localhost:8084/tipos';
  private readonly CATEGORIES_URL = 'http://localhost:8084/categorias';
  private readonly PREPARE_TYPES_URL = 'http://localhost:8084/tipos-preparo';
  private readonly PREPARATION_TIME_URL = 'http://localhost:8084/receitas/tempo-preparo';
  private readonly RANDOM_SEARCH_URL = 'http://localhost:8084/receitas/aleatoria/?categoryCode='
  private readonly FILTER_URL = 'http://localhost:8084/receitas/filtros?'

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

    
    mainSuggestion(){
      return this.http.get<Recipe>(`${this.RANDOM_SEARCH_URL}6`);
    }
     
   
    meatSuggestion(){
      return this.http.get<Recipe>(`${this.RANDOM_SEARCH_URL}5`)
    }

    saladSuggestion(){
      return this.http.get<Recipe>(`${this.RANDOM_SEARCH_URL}4`)
    }

    dessertSuggestion(){
      return this.http.get<Recipe>(`${this.RANDOM_SEARCH_URL}2`)
    }

    findRecipesByFilter(filter:Filter){
        if(filter.name == undefined){
          filter.name = ""
        }
        if(filter.comments == undefined){
          filter.comments = ""
        }
        if(filter.ingredient == undefined){
          filter.ingredient = ""
        }
        
        return this.http.get<Recipe[]>(`${this.FILTER_URL}&typeCode=${filter.typeCode}&categoryCode=${filter.categoryCode}&prepareTypeCode=${filter.prepareTypeCode}&preparationTime=${filter.preparationTime}&name=${filter.name}&tested=${filter.tested}&favorite=${filter.favorite}&comments=${filter.comments}&ingredient=${filter.ingredient}`);
    }

}
