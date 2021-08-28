import { Routes } from '@angular/router';

import { ListRecipeComponent } from './home';
import { FavoritesComponent } from './favorites';
import { InsertComponent } from './insert';
import { ManagerRecipesComponent }  from './manager';
import { EditRecipeComponent } from './edit';

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