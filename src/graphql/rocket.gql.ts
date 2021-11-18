import { gql } from '@apollo/client';

export const GET_ROCKET = gql`
query rocketFlight($id: String!) {
  rocket(id: $id){
    id
    rocket_name
    flickr_images
    description
    wikipedia
  }
}
`;