import { gql } from "@apollo/client";

// put your GraphQL requests here (in one file or different ones)
export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountryById($code: String!) {
    country(code: $code) {
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;
