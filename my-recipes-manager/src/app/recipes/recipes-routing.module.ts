import { Routes } from '@angular/router';

import { ListRecipeComponent } from './home-recipe';
import { FavoritesComponent } from './favorites';
import { InsertComponent } from './insert-recipe';
import { InsertIngredientComponent } from './insert-ingredient';
import { ManagerRecipesComponent }  from './manager-recipes';
import { EditRecipeComponent } from './edit-recipe';
import { ManagerIngredientsComponent } from './manager-ingredients';

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
    {
        path: 'ingredientes/gerenciar',
        component: ManagerIngredientsComponent
    },
];