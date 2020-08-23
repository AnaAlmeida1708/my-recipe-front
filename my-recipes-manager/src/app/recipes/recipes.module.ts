import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RecipeService, IngredientService } from './services';
import { ListRecipeComponent } from './home-recipe';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { InsertComponent } from './insert-recipe/insert.component';
import { InsertIngredientComponent } from './insert-ingredient/insert-ingredient.component';
import { ManagerRecipesComponent } from './manager-recipes/manager-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    ListRecipeComponent, 
    ShowRecipeComponent, 
    FavoritesComponent, 
    InsertComponent, 
    InsertIngredientComponent, 
    ManagerRecipesComponent, 
    EditRecipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
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
