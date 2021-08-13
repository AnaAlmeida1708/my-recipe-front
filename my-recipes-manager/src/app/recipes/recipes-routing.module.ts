import { Routes } from '@angular/router';

import { ListRecipeComponent } from './home-recipe';
import { FavoritesComponent } from './favorites';
import { InsertComponent } from './insert-recipe';
import { ManagerRecipesComponent }  from './manager-recipes';
import { EditRecipeComponent } from './edit-recipe';

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
    {
        path: 'receitas/editar/:code',
        component: EditRecipeComponent
    },

];