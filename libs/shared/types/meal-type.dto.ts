import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

export type CreateSuborder = {
  __typename?: 'CreateSuborder';
  createSuborder?: Maybe<OrderType>;
};

export type CreateSuborderCreateSuborderArgs = {
  suborder: SuborderInputType;
  token?: Maybe<Scalars['String']>;
};

export type DrinkType = {
  __typename?: 'DrinkType';
  /** Amount of drink measured in stored unit */
  amount: Scalars['Float'];
  /** Drink Id */
  id: Scalars['Int'];
  /** Drink Name */
  name: Scalars['String'];
  /** Drink Price */
  price: Scalars['Float'];
  /** Unit in which is Amount stated */
  unit: Scalars['String'];
};

export type MealInputType = {
  count: Scalars['Int'];
  id: Scalars['Int'];
};

export type MealType = {
  __typename?: 'MealType';
  /** Meal id */
  id: Scalars['Int'];
  /** Meal name */
  name: Scalars['String'];
  /** Meal price */
  price: Scalars['Float'];
};

export type MealsQuery = {
  __typename?: 'MealsQuery';
  drinks?: Maybe<Array<Maybe<DrinkType>>>;
  meals?: Maybe<Array<Maybe<MealType>>>;
  orderById?: Maybe<OrderType>;
};

export type MealsQueryOrderByIdArgs = {
  orderId: Scalars['Int'];
  token: Scalars['String'];
};

export type OrderChangedSubscription = {
  __typename?: 'OrderChangedSubscription';
  orderChanged?: Maybe<OrderType>;
};

export type OrderChangedSubscriptionOrderChangedArgs = {
  orderId: Scalars['Int'];
  token: Scalars['String'];
};

/** Describes state of order */
export enum OrderStateEnumType {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Waiting = 'WAITING',
}

export type OrderType = {
  __typename?: 'OrderType';
  /** Price */
  finalPrice: Scalars['Float'];
  /** Order id */
  id: Scalars['Int'];
  orderState?: Maybe<OrderStateEnumType>;
  suborders?: Maybe<Array<Maybe<SuborderType>>>;
  /** Table id */
  tableId: Scalars['Int'];
  /** Token */
  token: Scalars['String'];
};

export type SuborderDrinkType = {
  __typename?: 'SuborderDrinkType';
  /** Amount of drink measured in stored unit */
  amount: Scalars['Float'];
  /** Count of drinks in suborder. */
  count: Scalars['Int'];
  /** Drink Id */
  id: Scalars['Int'];
  /** Drink name. */
  name: Scalars['String'];
  /** Drink Price */
  price: Scalars['Float'];
  /** Unit in which is Amount stated */
  unit: Scalars['String'];
};

export type SuborderInputType = {
  drinks?: Maybe<Array<Maybe<MealInputType>>>;
  meals?: Maybe<Array<Maybe<MealInputType>>>;
  tableId: Scalars['Int'];
};

export type SuborderMealType = {
  __typename?: 'SuborderMealType';
  /** Count of meal in suborder */
  count: Scalars['Int'];
  /** Meal id */
  id: Scalars['Int'];
  /** Meal name */
  name: Scalars['String'];
  /** Meal price */
  price: Scalars['Float'];
};

export type SuborderType = {
  __typename?: 'SuborderType';
  drinks?: Maybe<Array<Maybe<SuborderDrinkType>>>;
  /** Suborder id */
  id: Scalars['Int'];
  meals?: Maybe<Array<Maybe<SuborderMealType>>>;
  /** Order id */
  orderId: Scalars['Int'];
  /** Table id */
  tableId: Scalars['Int'];
};

export type MealsQueryVariables = Exact<{ [key: string]: never }>;

export type DrinksQueryVariables = Exact<{ [key: string]: never }>;

export type DrinksQuery = {
  __typename?: 'MealsQuery';
  drinks?:
    | Array<
        | {
            __typename?: 'DrinkType';
            id: number;
            name: string;
            price: number;
            amount: number;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type CreateSuborderMutationVariables = Exact<{
  tableId: Scalars['Int'];
  meals?: Maybe<Array<Maybe<MealInputType>> | Maybe<MealInputType>>;
  drinks?: Maybe<Array<Maybe<MealInputType>> | Maybe<MealInputType>>;
  token: Scalars['String'];
}>;

export type CreateSuborderMutation = {
  __typename?: 'CreateSuborder';
  createSuborder?:
    | { __typename?: 'OrderType'; id: number; token: string; tableId: number }
    | null
    | undefined;
};

export type OrderChangedSubscriptionSubscriptionVariables = Exact<{
  orderId: Scalars['Int'];
  token: Scalars['String'];
}>;

export type OrderChangedSubscriptionSubscription = {
  __typename?: 'OrderChangedSubscription';
  orderChanged?:
    | {
        __typename?: 'OrderType';
        id: number;
        token: string;
        orderState?: OrderStateEnumType | null | undefined;
        finalPrice: number;
        suborders?:
          | Array<
              | {
                  __typename?: 'SuborderType';
                  meals?:
                    | Array<
                        | {
                            __typename?: 'SuborderMealType';
                            id: number;
                            name: string;
                            price: number;
                            count: number;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                  drinks?:
                    | Array<
                        | {
                            __typename?: 'SuborderDrinkType';
                            id: number;
                            name: string;
                            price: number;
                            count: number;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
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
      amount
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
 *      tableId: // value for 'tableId'
 *      meals: // value for 'meals'
 *      drinks: // value for 'drinks'
 *      token: // value for 'token'
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
export const OrderChangedSubscriptionDocument = gql`
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
          count
        }
        drinks {
          id
          name
          price
          count
        }
      }
      finalPrice
    }
  }
`;

/**
 * __useOrderChangedSubscriptionSubscription__
 *
 * To run a query within a React component, call `useOrderChangedSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrderChangedSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderChangedSubscriptionSubscription({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useOrderChangedSubscriptionSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    OrderChangedSubscriptionSubscription,
    OrderChangedSubscriptionSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    OrderChangedSubscriptionSubscription,
    OrderChangedSubscriptionSubscriptionVariables
  >(OrderChangedSubscriptionDocument, options);
}
export type OrderChangedSubscriptionSubscriptionHookResult = ReturnType<
  typeof useOrderChangedSubscriptionSubscription
>;
export type OrderChangedSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<OrderChangedSubscriptionSubscription>;
