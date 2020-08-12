import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RecipeService } from './services';
import { ListRecipeComponent } from './home-recipe';

@NgModule({
  declarations: [ListRecipeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    RecipeService
  ]
})
export class RecipesModule { }
