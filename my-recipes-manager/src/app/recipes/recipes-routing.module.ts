import { Routes } from '@angular/router';

import { ListRecipeComponent } from './list-recipe';

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