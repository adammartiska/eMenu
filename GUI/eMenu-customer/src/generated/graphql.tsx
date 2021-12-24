import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DrinkInputType = {
  count: Scalars["Int"];
  id: Scalars["Int"];
};

export type DrinkType = {
  __typename?: "DrinkType";
  /** Amount of drink measured in stored unit */
  amount: Scalars["Float"];
  /** Drink Id */
  id: Scalars["Int"];
  /** Drink Name */
  name: Scalars["String"];
  /** Drink Price */
  price: Scalars["Float"];
  type?: Maybe<MealTypeEnumType>;
  /** Unit in which is Amount stated */
  unit: Scalars["String"];
};

export type MealInputType = {
  count: Scalars["Int"];
  id: Scalars["Int"];
};

export type MealType = {
  __typename?: "MealType";
  /** Meal id */
  id: Scalars["Int"];
  /** Meal name */
  name: Scalars["String"];
  /** Meal price */
  price: Scalars["Float"];
  type?: Maybe<MealTypeEnumType>;
};

/** Describes whether is Meal or Drink */
export enum MealTypeEnumType {
  Drink = "DRINK",
  Meal = "MEAL",
}

export type MealsMutation = {
  __typename?: "MealsMutation";
  createSuborder?: Maybe<SuborderType>;
};

export type MealsMutationCreateSuborderArgs = {
  drinks?: Maybe<Array<Maybe<DrinkInputType>>>;
  meals?: Maybe<Array<Maybe<MealInputType>>>;
  suborder: SuborderInputType;
};

export type MealsQuery = {
  __typename?: "MealsQuery";
  drinks?: Maybe<Array<Maybe<DrinkType>>>;
  meals?: Maybe<Array<Maybe<MealType>>>;
  orders?: Maybe<Array<Maybe<OrderType>>>;
  suborders?: Maybe<Array<Maybe<SuborderType>>>;
};

/** Describes state of order */
export enum OrderStateEnumType {
  Closed = "CLOSED",
  Open = "OPEN",
  Paid = "PAID",
}

export type OrderType = {
  __typename?: "OrderType";
  /** Price */
  finalPrice: Scalars["Float"];
  /** Order id */
  id: Scalars["Int"];
  orderState?: Maybe<OrderStateEnumType>;
  /** Table id */
  tableId: Scalars["Int"];
};

export type SuborderInputType = {
  id: Scalars["Int"];
  orderId: Scalars["Int"];
  tableId: Scalars["Int"];
};

export type SuborderType = {
  __typename?: "SuborderType";
  /** Suborder id */
  id: Scalars["Int"];
  /** Order id */
  orderId: Scalars["Int"];
  /** Table id */
  tableId: Scalars["Int"];
};

export type MealsQueryVariables = Exact<{ [key: string]: never }>;

// export type MealsQuery = {
//   __typename?: "MealsQuery";
//   meals?:
//     | Array<
//         | { __typename?: "MealType"; id: number; name: string; price: number }
//         | null
//         | undefined
//       >
//     | null
//     | undefined;
// };

export type DrinksQueryVariables = Exact<{ [key: string]: never }>;

export type DrinksQuery = {
  __typename?: "MealsQuery";
  drinks?:
    | Array<
        | { __typename?: "DrinkType"; id: number; name: string; price: number }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type CreateSuborderMutationVariables = Exact<{
  suborder: SuborderInputType;
  meals?: Maybe<Array<Maybe<MealInputType>> | Maybe<MealInputType>>;
  drinks?: Maybe<Array<Maybe<DrinkInputType>> | Maybe<DrinkInputType>>;
}>;

export type CreateSuborderMutation = {
  __typename?: "MealsMutation";
  createSuborder?:
    | { __typename?: "SuborderType"; id: number; orderId: number }
    | null
    | undefined;
};

export const MealsDocument = gql`
  query Meals {
    meals {
      id
      name
      price
    }
  }
`;

/**
 * __useMealsQuery__
 *
 * To run a query within a React component, call `useMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMealsQuery(
  baseOptions?: Apollo.QueryHookOptions<MealsQuery, MealsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MealsQuery, MealsQueryVariables>(
    MealsDocument,
    options
  );
}
export function useMealsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MealsQuery, MealsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MealsQuery, MealsQueryVariables>(
    MealsDocument,
    options
  );
}
export type MealsQueryHookResult = ReturnType<typeof useMealsQuery>;
export type MealsLazyQueryHookResult = ReturnType<typeof useMealsLazyQuery>;
export type MealsQueryResult = Apollo.QueryResult<
  MealsQuery,
  MealsQueryVariables
>;
export const DrinksDocument = gql`
  query Drinks {
    drinks {
      id
      name
      price
    }
  }
`;

/**
 * __useDrinksQuery__
 *
 * To run a query within a React component, call `useDrinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useDrinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDrinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useDrinksQuery(
  baseOptions?: Apollo.QueryHookOptions<DrinksQuery, DrinksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DrinksQuery, DrinksQueryVariables>(
    DrinksDocument,
    options
  );
}
export function useDrinksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DrinksQuery, DrinksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DrinksQuery, DrinksQueryVariables>(
    DrinksDocument,
    options
  );
}
export type DrinksQueryHookResult = ReturnType<typeof useDrinksQuery>;
export type DrinksLazyQueryHookResult = ReturnType<typeof useDrinksLazyQuery>;
export type DrinksQueryResult = Apollo.QueryResult<
  DrinksQuery,
  DrinksQueryVariables
>;
export const CreateSuborderDocument = gql`
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
export type CreateSuborderMutationFn = Apollo.MutationFunction<
  CreateSuborderMutation,
  CreateSuborderMutationVariables
>;

/**
 * __useCreateSuborderMutation__
 *
 * To run a mutation, you first call `useCreateSuborderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSuborderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSuborderMutation, { data, loading, error }] = useCreateSuborderMutation({
 *   variables: {
 *      suborder: // value for 'suborder'
 *      meals: // value for 'meals'
 *      drinks: // value for 'drinks'
 *   },
 * });
 */
export function useCreateSuborderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSuborderMutation,
    CreateSuborderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSuborderMutation,
    CreateSuborderMutationVariables
  >(CreateSuborderDocument, options);
}
export type CreateSuborderMutationHookResult = ReturnType<
  typeof useCreateSuborderMutation
>;
export type CreateSuborderMutationResult =
  Apollo.MutationResult<CreateSuborderMutation>;
export type CreateSuborderMutationOptions = Apollo.BaseMutationOptions<
  CreateSuborderMutation,
  CreateSuborderMutationVariables
>;