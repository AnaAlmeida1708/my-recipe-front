import { Ingredient } from './ingredient.model';
export class DetailsRecipeIngredients {

    constructor(
        public quantity ?: string,
        public ingredient ?: Ingredient
    ) {}
}