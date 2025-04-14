// src/graphql/mutations/deleteTask.ts
import { gql } from '@apollo/client';

export const DELETE_TASK = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`;