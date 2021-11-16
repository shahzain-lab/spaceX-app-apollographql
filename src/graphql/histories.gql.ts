import { gql } from '@apollo/client';

export const GET_HISTORIES = gql`
 query historiesFlight {
  history(limit: 10) {
    id
    title
  }
}
`;