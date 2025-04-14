// src/graphql/taskQueries.ts
import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      date
      done
    }
  }
`;

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

export const DELETE_TASK = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`;

export const DELETE_ALL_TASKS = gql`
  mutation DeleteAllTasks {
    deleteAllTasks
  }
`;

export const EDIT_TASK = gql`
  mutation EditTask($id: Int!, $title: String!, $description: String, $date: String) {
    editTask(id: $id, title: $title, description: $description, date: $date) {
      id
      title
      description
      date
      done
    }
  }
`;

export const COMPLETE_TASK = gql`
  mutation CompleteTask($id: Int!) {
    completeTask(id: $id) {
      id
      title
      description
      date
      done
    }
  }
`;

export const GET_COMPLETED_TASKS = gql`
  query GetCompletedTasks {
    completedTasks {
      id
      title
      description
      date
      done
    }
  }
`;