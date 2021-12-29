import { find, propEq } from "ramda";

//TODO is it better to pass the meals as parameter here or to directly call it inside function?
export function getMealById(id, meals) {
  if (!meals) {
    return;
  }
  return find(propEq("id", id))(meals);
}
