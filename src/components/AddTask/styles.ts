import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
`
export const Button = styled.button`
  padding: 10px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #333;
  }
`;

export const Icon = styled.img` 
    width:30px;
    height:30px;
    
    cursor: pointer;
`

export const Input = styled.input`
    // width: 25%;
    outline: none;
    border: none;
    border: solid black 3px;
    font-size: 20px;
    padding: 10px;
    margin: 5px;
`
