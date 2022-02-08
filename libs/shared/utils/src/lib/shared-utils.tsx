import { find, propEq } from 'ramda';
import { MealType, DrinkType } from '../../../types';

//TODO is it better to pass the meals as parameter here or to directly call it inside function?
export function getMealById(id: number, meals: Array<MealType>) {
  if (!meals) {
    return;
  }
  return find(propEq('id', id))(meals);
}

//TODO I could do simple generic getter for all items but decided rather to keep it separated
export function getDrinkById(id: number, drinks: Array<DrinkType>) {
  if (!drinks) {
    return;
  }
  return find(propEq('id', id))(drinks);
}
