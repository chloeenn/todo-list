// src/components/TaskList/index.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import TaskItem from '../TaskItem';
import * as Styled from './styles';
import { GET_TASKS } from '../../graphql/queries/taskQueries';
import { Task } from '../../types/Task.types';

const TaskList: React.FC = () => {
  const { loading, error, data } = useQuery<{ tasks: Task[] }>(GET_TASKS);

  if (loading) return <Styled.TaskList>Loading tasks...</Styled.TaskList>;
  if (error) {
    console.error('TaskList Error:', error);
    return <Styled.TaskList>Error: {error.message}</Styled.TaskList>;
  }

  return (
    <Styled.TaskList>
      {data?.tasks && data.tasks.length > 0 ? (
        data.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <Styled.EmptyMessage>No tasks to display</Styled.EmptyMessage>
      )}
    </Styled.TaskList>
  );
};

export default TaskList;