import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apple', 1),
    new Ingredient('Tomato', 3)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    default:
      return state;
  }
}
