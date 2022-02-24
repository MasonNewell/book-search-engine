import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          description
          title
          bookId
          image
          link
          authors
        }
      }
      token
    }
  }
`;
