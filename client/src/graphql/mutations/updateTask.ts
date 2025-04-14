// src/graphql/mutations/updateTask.ts
import { gql } from '@apollo/client';

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: Int!, $title: String, $description: String, $date: String, $done: Boolean) {
    updateTask(id: $id, title: $title, description: $description, date: $date, done: $done) {
      id
      title
      description
      date
      done
    }
  }
`;