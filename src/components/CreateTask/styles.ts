import styled from "styled-components";

export const Container = styled.div`
   
`
export const Button = styled.button`
  width: 100%;
  height: 60px;
  padding: 10px;
  background: black;
  color: white;
  border-radius: 10%;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #333;
  }
    w-full flex items-center justify-center gap-2 font-medium text-md  shadow hover:bg-gray-800 bg-black text-white
`;

export const Icon = styled.img` 
    width:30px;
    height:30px;
    
    cursor: pointer;
`

export const Input = styled.input`
    outline: none;
    border: none;
    border: solid black 3px;
    font-size: 20px;
    padding: 10px;
    margin: 5px;
`
