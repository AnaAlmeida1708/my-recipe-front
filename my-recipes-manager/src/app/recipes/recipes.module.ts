import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RecipeService, IngredientService } from './services';
import { ListRecipeComponent } from './home-recipe';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { InsertComponent } from './insert/insert.component';
import { InsertIngredientComponent } from './insert-ingredient/insert-ingredient.component';
import { ManagerRecipesComponent } from './manager-recipes/manager-recipes.component';

@NgModule({
  declarations: [
    ListRecipeComponent, 
    ShowRecipeComponent, 
    FavoritesComponent, InsertComponent, InsertIngredientComponent, ManagerRecipesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    RecipeService,
    IngredientService
  ],
  entryComponents:[
    ShowRecipeComponent
  ]
})
export class RecipesModule { }
