import { gql } from '@apollo/client';

export const GET_MISSIONS = gql`
query missions {
  missions {
    mission_id
    description
    mission_name
    twitter
    website
  }
}

`;