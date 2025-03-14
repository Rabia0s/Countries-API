const { gql } = require("apollo-server");

const typeDefs = gql`
  type Continent {
    id: ID!
    name: String!
  }

  type Language {
    id: ID!
    name: String!
    native: String!
  }

  type Country {
    id: ID!
    name: String!
    code: String!
    emoji: String!
    continent: Continent!
    languages: [Language!]!
  }

  type Query {
    countries: [Country!]!
    country(code: String!): Country
    continents: [Continent!]!
    continent(id: ID!): Continent
    languages: [Language!]!
    language(id: ID!): Language
  }
`;

module.exports = typeDefs;
