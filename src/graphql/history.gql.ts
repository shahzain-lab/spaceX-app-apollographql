import { gql } from '@apollo/client';

export const GET_FLIGHT_HISTORY = gql`
query historyFlight($id: String!) {
  history(id: $id) {
    title
    details
    links{
      article
      wikipedia
    }
  }
}
`;