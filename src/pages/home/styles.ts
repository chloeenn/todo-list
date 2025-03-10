import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 42px;
`;

export const GreetingContainer = styled.div`
  text-align: center;
  margin-bottom: 32px; 
`;

export const Greeting = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const DateText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0 0 0;
`;