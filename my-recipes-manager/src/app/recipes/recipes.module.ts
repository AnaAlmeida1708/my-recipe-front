import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeService } from './services';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';

@NgModule({
  declarations: [ListRecipeComponent],
  imports: [
    CommonModule
  ],
  providers:[
    RecipeService
  ]
})
export class RecipesModule { }
