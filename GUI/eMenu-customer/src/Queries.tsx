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
      amount
    }
  }
`;

// export const SUBMIT = gql`
//   mutation createSuborder(
//     $suborder: SuborderInputType!
//     $meals: [MealInputType]
//     $drinks: [DrinkInputType]
//   ) {
//     createSuborder(suborder: $suborder, meals: $meals, drinks: $drinks) {
//       id
//       orderId
//     }
//   }
// `;
// mutation CreateSuborder{
//   createSuborder(suborder: {tableId: 16, meals:[{id:2, count:3}], drinks:[{id:34, count: 3}]}, token:"bpTtlPuC")
//   {
//     id,
//     token
//     tableId
//     suborders{id, tableId, meals{name}, drinks{name}}
//   }
// }

export const SUBORDER = gql`
  mutation CreateSuborder(
    $tableId: Int!
    $meals: [MealInputType]
    $drinks: [MealInputType]
    $token: String!
  ) {
    createSuborder(
      suborder: { tableId: $tableId, meals: $meals, drinks: $drinks }
      token: $token
    ) {
      id
      token
      tableId
    }
  }
`;

const ORDER_CHANGED_SUBSCRIPTION = gql`
  subscription OrderChangedSubscription($orderId: Int!, $token: String!) {
    orderChanged(orderId: $orderId, token: $token) {
      id
      token
      orderState
      suborders {
        meals {
          id
          name
          price
        }
        drinks {
          id
          name
          price
        }
      }
      finalPrice
    }
  }
`;
