import { useQuery, gql } from "@apollo/client";

// query GetSpaceX {
//   launchesPast(limit: 10) {
//     mission_name
//     launch_date_local
//     launch_site {
//       site_name_long
//     }
//   }
// }
// define gql
const MEALS = gql`
  query {
    meals {
      id,
      name,
      price,
    }
  }
`;

export const useDrinks = () => {
  const { loading, error, data } = useQuery(MEALS);
  //todo further processing of the response
  return { loading, error, data };
};
