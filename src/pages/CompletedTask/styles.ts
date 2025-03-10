import styled from "styled-components";

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
//   max-width: 500px;
  margin: 0 auto;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
`;

export const CheckBoxContainer = styled.div<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ $completed }) => ($completed ? "#000" : "#d1d5db")};
  cursor: pointer;
  background: ${({ $completed }) => ($completed ? "#000" : "transparent")};

  svg {
    width: 16px;
    height: 16px;
    stroke: white;
    display: ${({ $completed }) => ($completed ? "block" : "none")}; 
  }

`;

export const TaskInput = styled.input<{ $completed: boolean }>`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: ${({ $completed }) => ($completed ? "#999" : "#333")};
  text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
  border: none;
  background: transparent;
  outline: none;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease;
`;

export const TaskDate = styled.input`
  font-size: 14px;
  color: #666;
  border: none;
  background: transparent;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
  
  &:focus {
    background: #f7f7f7;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: #555;
  }
`;
