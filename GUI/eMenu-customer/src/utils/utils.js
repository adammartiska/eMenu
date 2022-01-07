import { find, propEq } from "ramda";

//TODO is it better to pass the meals as parameter here or to directly call it inside function?
export function getMealById(id, meals) {
  if (!meals) {
    return;
  }
  return find(propEq("id", id))(meals);
}

//TODO I could do simple generic getter for all items but decided rather to keep it separated
export function getDrinkById(id, drinks) {
  if (!drinks) {
    return;
  }
  console.log(drinks);
  return find(propEq("id", id))(drinks);
}
