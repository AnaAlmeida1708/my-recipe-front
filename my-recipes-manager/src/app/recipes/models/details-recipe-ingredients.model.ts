import { Ingredient } from './ingredient.model';
export class DetailsRecipeIngredients {

    constructor(
        public quantity ?: number,
        public ingredient ?: Ingredient
    ) {}
}