import React, { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import { ReactComponent as Plus } from "../../assets/svg/plus.svg";
import * as Styled from "./styles";

const CreateTask: React.FC = () => {
  const { addTask } = useTasks(); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, description, date);
      setTitle("");
      setDescription("");
      setDate("");
      setIsInputVisible(false);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setIsInputVisible(false);
  };

  return (
    <Styled.FormContainer>
      {isInputVisible && (
        <Styled.TaskForm onSubmit={handleAddTask}>
          <Styled.Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task name"
            required
          />
          <Styled.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Notes"
          />
          <Styled.DateInput
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Styled.ButtonContainer>
           
            <Styled.CancelButton type="button" onClick={handleCancel}>
              Cancel
            </Styled.CancelButton>
            <Styled.SubmitButton type="submit">Save changes</Styled.SubmitButton>
          </Styled.ButtonContainer>
        </Styled.TaskForm>
      )}
      <Styled.CreateButton onClick={() => setIsInputVisible(true)}>
        <Plus /> Create New Task
      </Styled.CreateButton>
    </Styled.FormContainer>
  );
};

export default CreateTask;