import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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

export type MealType = {
  __typename?: 'MealType';
  /** Meal id */
  id: Scalars['Int'];
  /** Meal name */
  name: Scalars['String'];
  /** Meal price */
  price: Scalars['Float'];
};

export type MealsServiceQuery = {
  __typename?: 'MealsServiceQuery';
  drinks?: Maybe<Array<Maybe<DrinkType>>>;
  meals?: Maybe<Array<Maybe<MealType>>>;
};

export type MealsQueryVariables = Exact<{ [key: string]: never; }>;


export type MealsQuery = { __typename?: 'MealsServiceQuery', meals?: Array<{ __typename?: 'MealType', id: number, name: string, price: number } | null | undefined> | null | undefined };

export type DrinksQueryVariables = Exact<{ [key: string]: never; }>;


export type DrinksQuery = { __typename?: 'MealsServiceQuery', drinks?: Array<{ __typename?: 'DrinkType', id: number, name: string, price: number } | null | undefined> | null | undefined };


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
export function useMealsQuery(baseOptions?: Apollo.QueryHookOptions<MealsQuery, MealsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MealsQuery, MealsQueryVariables>(MealsDocument, options);
      }
export function useMealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealsQuery, MealsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MealsQuery, MealsQueryVariables>(MealsDocument, options);
        }
export type MealsQueryHookResult = ReturnType<typeof useMealsQuery>;
export type MealsLazyQueryHookResult = ReturnType<typeof useMealsLazyQuery>;
export type MealsQueryResult = Apollo.QueryResult<MealsQuery, MealsQueryVariables>;
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
export function useDrinksQuery(baseOptions?: Apollo.QueryHookOptions<DrinksQuery, DrinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DrinksQuery, DrinksQueryVariables>(DrinksDocument, options);
      }
export function useDrinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DrinksQuery, DrinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DrinksQuery, DrinksQueryVariables>(DrinksDocument, options);
        }
export type DrinksQueryHookResult = ReturnType<typeof useDrinksQuery>;
export type DrinksLazyQueryHookResult = ReturnType<typeof useDrinksLazyQuery>;
export type DrinksQueryResult = Apollo.QueryResult<DrinksQuery, DrinksQueryVariables>;