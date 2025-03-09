import styled from "styled-components";

export const FormContainer = styled.div`
  position: fixed;
  bottom: 20px; 
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 320px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background:black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%; 
  height: 50px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;

export const TaskForm = styled.form`
  position: absolute;
  bottom: 60px; 
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 320px;
  height: 250px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: slideUp 0.3s ease-out;
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  background:rgb(245, 245, 245);
  border: none;
  border-radius: 8px;
  outline: none;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  background:rgb(245, 245, 245);
  border: none;
  border-radius: 8px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  height: 50%;
`;

export const DateInput = styled.input`
  padding: 10px;
  font-size: 14px;
  background:rgb(245, 245, 245);
  border: none;
  border-radius: 8px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  height: 42px;
  background:rgb(0, 0, 0);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background:rgb(48, 48, 48);
  }
`;

export const CancelButton = styled.button`
  background: #f0f0f0;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
`;