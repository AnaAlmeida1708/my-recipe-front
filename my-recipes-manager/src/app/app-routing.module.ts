import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeRoutes } from './recipes'

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/receitas/listar',
        pathMatch: 'full'
    },
    ...RecipeRoutes
];

@NgModule(
    {
        imports: [ RouterModule.forRoot(routes)],
        exports: [ RouterModule ]
    }
)
export class AppRoutingModule{}