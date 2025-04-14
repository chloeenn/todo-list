import { gql } from '@apollo/client';

export const ADD_TASK = gql`
  mutation AddTask($title: String!, $description: String, $date: String) {
    addTask(title: $title, description: $description, date: $date) {
      id
      title
      description
      date
      done
    }
  }
`;