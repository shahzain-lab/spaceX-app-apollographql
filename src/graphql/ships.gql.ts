import { gql } from '@apollo/client';

export const GET_SHIPS_DETAILS = gql`
query shipsDetails {
  ships(limit: 5) {
    image
    ship_name
    ship_id
    url
    year_built
    roles
  }
}
`;