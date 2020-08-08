import { Type, PrepareType, DetailsRecipeIngredients, Category  } from './index';
export class Recipe {

    constructor(
        public code ?: number,
        public name ?: string,
        public tested ?: boolean,
        public methodOfPreparation ?: string,
        public preparationTime ?: string,
        public comments ?: string,
        public favorite ?: boolean,
        public category ?: Category,
        public type ?: Type,
        public prepareType ?: PrepareType,
        public detailsRecipeIngredients ?: DetailsRecipeIngredients
    ) {}
}