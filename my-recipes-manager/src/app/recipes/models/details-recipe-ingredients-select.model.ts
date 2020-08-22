import { DetailsRecipeIngredients } from './details-recipe-ingredients.model';

export class DetailsRecipeIngredientsSelect {

    constructor(
        public details ?: DetailsRecipeIngredients,
        public select ?: boolean
    ) {}
}