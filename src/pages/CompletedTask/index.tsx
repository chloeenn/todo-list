import React from "react";
import TaskItem from "../../components/TaskItem";
import * as Styled from "./styles";
import { useTasks } from "../../context/TaskContext";

const Completed: React.FC = () => {
  const { completedTasks } = useTasks();

  return (
    <Styled.CompletedContainer>
      <Styled.SectionTitle>Completed Tasks</Styled.SectionTitle>
      {completedTasks.length > 0 ? (
        <Styled.TaskList>
          {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </Styled.TaskList>
      ) : (
        <Styled.NoTasksMessage>No completed tasks yet</Styled.NoTasksMessage>
      )}
    </Styled.CompletedContainer>
  );
};

export default Completed;
