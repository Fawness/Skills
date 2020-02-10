import { IRecipe } from '../interfaces/recipe';
import { IIngredient } from './../interfaces/ingredient';

export class Recipe implements IRecipe {
    id: number;
    title: string;
    description: string;
    serves: string;
    imageUrl: string;
    ingredients: IIngredient[];
    instructions: string[];

    constructor({id, title, description, serves, imageUrl, ingredients, instructions}) {


    }

}
