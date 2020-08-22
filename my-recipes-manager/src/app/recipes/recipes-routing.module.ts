import { Routes } from '@angular/router';

import { ListRecipeComponent } from './home-recipe';
import { FavoritesComponent } from './favorites';
import { InsertComponent } from './insert';
import { InsertIngredientComponent } from './insert-ingredient';
import { ManagerRecipesComponent }  from './manager-recipes'

export const RecipeRoutes: Routes = [
    {
        path: 'receitas',
        redirectTo: 'receitas/home'
    },
    {
        path: 'receitas/home',
        component: ListRecipeComponent
    },
    {
        path: 'receitas/favoritas',
        component: FavoritesComponent
    },
    {
        path: 'receitas/cadastrar',
        component: InsertComponent
    },
    {
        path: 'receitas/gerenciar',
        component: ManagerRecipesComponent
    },

];