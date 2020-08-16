import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RecipeService } from './services';
import { ListRecipeComponent } from './home-recipe';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { InsertComponent } from './insert/insert.component';

@NgModule({
  declarations: [
    ListRecipeComponent, 
    ShowRecipeComponent, 
    FavoritesComponent, InsertComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    RecipeService
  ],
  entryComponents:[
    ShowRecipeComponent
  ]
})
export class RecipesModule { }
