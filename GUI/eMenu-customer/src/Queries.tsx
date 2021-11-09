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
