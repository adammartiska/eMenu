import { gql } from "@apollo/client";

export const MEALS = gql`
  query Meals {
    meals {
      id
      name
      price
    }
  }
`;

export const DRINKS = gql`
  query Drinks {
    drinks {
      id
      name
      price
    }
  }
`;

export const SUBMIT = gql`
  mutation createSuborder(
    $suborder: SuborderInputType!
    $meals: [MealInputType]
    $drinks: [DrinkInputType]
  ) {
    createSuborder(suborder: $suborder, meals: $meals, drinks: $drinks) {
      id
      orderId
    }
  }
`;
