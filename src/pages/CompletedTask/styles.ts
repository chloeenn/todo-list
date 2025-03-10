import styled from "styled-components";

export const CompletedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 32px;
`;

export const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NoTasksMessage = styled.p`
  color: #999;
  font-size: 16px;
  text-align: center;
  margin-top: 32px;
`;
