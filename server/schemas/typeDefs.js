const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    books: [Book]
    me: [User]
  }
`;

module.exports = typeDefs;
