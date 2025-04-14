// src/pages/CompletedTask/index.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import TaskItem from '../../components/TaskItem';
import * as Styled from './styles';
import { MainContainer, TextContainer, TextHeading } from '../Home/styles';
import { TaskList } from '../../components/TaskList/styles';
import { GET_COMPLETED_TASKS } from '../../graphql/queries/taskQueries';
import { Task } from '../../types/Task.types';

const Completed: React.FC = () => {
  const { loading, error, data } = useQuery<{ completedTasks: Task[] }>(GET_COMPLETED_TASKS, {
    onError: (err) => console.error('Query Error:', err),
  });

  if (loading) return (
    <MainContainer>
      <TextContainer>
        <TextHeading>Completed Tasks ✔️</TextHeading>
      </TextContainer>
      <Styled.NoTasksMessage>Loading completed tasks...</Styled.NoTasksMessage>
    </MainContainer>
  );

  if (error) {
    console.error('GraphQL Error Details:', error);
    return (
      <MainContainer>
        <TextContainer>
          <TextHeading>Completed Tasks ✔️</TextHeading>
        </TextContainer>
        <Styled.NoTasksMessage>Error: {error.message}</Styled.NoTasksMessage>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <TextContainer>
        <TextHeading>Completed Tasks ✔️</TextHeading>
      </TextContainer>
      {data?.completedTasks && data.completedTasks.length > 0 ? (
        <TaskList>
          {data.completedTasks.map((task) => (
            // <TaskItem key={task.id} task={task} />
            <TaskItem key={task.id} task={{ ...task, id: Number(task.id) }} />
          ))}
        </TaskList>
      ) : (
        <Styled.NoTasksMessage>No completed tasks yet</Styled.NoTasksMessage>
      )}
    </MainContainer>
  );
};

export default Completed;