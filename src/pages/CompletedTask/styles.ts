import styled from "styled-components";

export const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 100%;
  background-color: #f9f9f9;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
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
