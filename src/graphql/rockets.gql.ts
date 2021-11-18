import { gql } from '@apollo/client';

export const GET_ROCKETS = gql`
 query rocketsFlight {
  rockets(limit: 10){
    id
    rocket_name
  }
}
`;