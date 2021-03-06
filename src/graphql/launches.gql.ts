import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
query launches($itemsUpt: Int) {
    launches(limit: 5, offset: $itemsUpt) {
    mission_id
    mission_name
    flight_number
    launch_success
    launch_year
    details
    links {
      article_link
      video_link
      wikipedia
      flickr_images
    }
    
  }
}
`;