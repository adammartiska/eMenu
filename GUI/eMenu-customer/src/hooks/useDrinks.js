import React from "react";
import { useQuery, gql } from "@apollo/client";

// define gql
const DRINKS = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const useDrinks = ({}) => {
  const { loading, error, data } = useQuery(DRINKS);

  return { loading, error, data };
};
