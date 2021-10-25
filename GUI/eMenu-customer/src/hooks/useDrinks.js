import React from "react";
import { useQuery, gql } from "@apollo/client";

// define gql
const DRINKS = gql`
  query GetSpaceX {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;

export const useDrinks = () => {
  const { loading, error, data } = useQuery(DRINKS);
  //todo further processing of the response
  return { loading, error, data };
};
