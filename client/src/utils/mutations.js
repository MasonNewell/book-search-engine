import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook) {
    saveBook(input: $input) {
      username
      _id
      bookCount
      savedBooks {
        bookId
        description
        title
        image
        link
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      _id
      bookCount
      savedBooks {
        bookId
        description
        title
        image
        link
        authors
      }
    }
  }
`;
