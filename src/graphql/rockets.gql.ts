import { gql } from '@apollo/client';

export const GET_ROCKETS = gql`
 query rocketsFlight {
  rockets{
    rocket_id
    rocket_name
    flickr_images
    description
    wikipedia
  }
}
`;