import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Author {
    id: ID!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    description: String
    content: String
    author: Author!
  }

  type Query {
    authors: [Author!]!
    posts: [Post!]!
  }
`;
