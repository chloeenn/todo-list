// server/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Task {
    id: Int!
    title: String!
    description: String
    date: String
    done: Boolean!
  }

  type Query {
    tasks: [Task!]!
    completedTasks: [Task!]!
  }

  type Mutation {
    addTask(title: String!, description: String, date: String): Task!
    updateTask(id: Int!, title: String, description: String, date: String, done: Boolean): Task!
    deleteTask(id: Int!): Boolean!
  }
`;

module.exports = typeDefs;