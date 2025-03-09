import { styled } from "styled-components";

export const SearchInput = styled.input`
  height: 20px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  color: #555;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color:rgb(189, 188, 188);
  }
`;