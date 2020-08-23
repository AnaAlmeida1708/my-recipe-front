import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Type, PrepareType, Category, Recipe, Filter  } from '../models';

@Injectable()
export class RecipeService {

  private readonly TYPES_URL = 'http://localhost:8084/tipos';
  private readonly CATEGORIES_URL = 'http://localhost:8084/categorias';
  private readonly PREPARE_TYPES_URL = 'http://localhost:8084/tipos-preparo';
  private readonly PREPARATION_TIME_URL = 'http://localhost:8084/receitas/tempo-preparo';
  private readonly RANDOM_SEARCH_URL = 'http://localhost:8084/receitas/aleatoria/?categoryCode='
  private readonly FILTER_URL = 'http://localhost:8084/receitas/filtros?'
  private readonly RECIPE_URL = 'http://localhost:8084/receitas/';
  private readonly RECIPES_FAVORITE_URL = 'http://localhost:8084/receitas/favoritas';

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

    findRecipeByCode(code: number){
      return this.http.get<Recipe>(`${this.RECIPE_URL}${code}`);
    }
    
    findRecipesFavorite(){
      return this.http.get<Recipe[]>(`${this.RECIPES_FAVORITE_URL}`);
    }

    insertRecipe(recipe: any){
      return this.http.post(this.RECIPE_URL, recipe);
    }

    findAllRecipes(){
      return this.http.get<Recipe[]>(`${this.RECIPE_URL}`);
    }

    updateRecipe(codeRecipe:number, recipe: Recipe){
      let recipeDto: any = {};
      recipeDto.name = recipe.name;
      recipeDto.code = recipe.code;
      recipeDto.comments = recipe.comments;
      recipeDto.favorite = recipe.favorite;
      recipeDto.tested = recipe.tested;
      recipeDto.preparationTime = recipe.preparationTime;
      recipeDto.methodOfPreparation = recipe.methodOfPreparation;
      let codeType: number = recipe.type.code;
      let codeCategory: number = recipe.category.code;
      let codePrepareType: number = recipe.prepareType.code;
      recipeDto.codeType = codeType;
      recipeDto.codeCategory = codeCategory;
      recipeDto.codePrepareType = codePrepareType;
      //alert('Form: ' + JSON.stringify(recipeDto));
      return this.http.put(`${this.RECIPE_URL}${codeRecipe}`, recipeDto);
    }
}
