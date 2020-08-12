import { Routes } from '@angular/router';

import { ListRecipeComponent } from './home-recipe';

export const RecipeRoutes: Routes = [
    {
        path: 'receitas',
        redirectTo: 'receitas/listar'
    },
    {
        path: 'receitas/listar',
        component: ListRecipeComponent
    },
];