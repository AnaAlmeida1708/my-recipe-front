import { Routes } from '@angular/router';

import { ListRecipeComponent } from './home-recipe';
import { FavoritesComponent } from './favorites';
import { InsertComponent } from './insert';

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
        path: 'receitas/cadastro',
        component: InsertComponent
    },

];