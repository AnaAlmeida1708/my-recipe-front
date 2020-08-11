import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Type, PrepareType, DetailsRecipeIngredients, Category, Recipe, Ingredient  } from '../models';
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
    
     /*
    findRecipesByFilter(name: string, ingredient: string, comments: string,
      typeCode: number, categoryCode: number, prepareTypeCode: number, preparationTime: string,
      tested: boolean, favorite: boolean ){
        if(typeCode==0){
          typeCode=null
        }
        if(categoryCode==0){
          categoryCode=null
        }
        if(prepareTypeCode==0){
          prepareTypeCode=null
        }
        if(tested==false){
          tested=null
        }
        if(favorite==false){
          favorite=null
        }
        
        return this.http.get<String[]>(`${this.FILTER_URL}
        &preparationTime=${preparationTime}
        &name=${name}
        &comments=${comments}
        &ingredient=${ingredient}
        &typeCode=${typeCode}
        &categoryCode=${categoryCode}
        &prepareTypeCode=${prepareTypeCode}
        &tested=${tested}
        &favorite=${favorite}
        `);
    }

    */
}
