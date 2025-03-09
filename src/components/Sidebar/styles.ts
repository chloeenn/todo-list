import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  border-radius: 12px;
  background-color: #fff;
  padding: 20px;
  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

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

export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid #f1f1f1;
  margin: 20px 0;
`;

export const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin: 5px 0;
  cursor: pointer;
  padding: 15px;
  &:hover {
    border-radius: 10px;
    background-color:#D3D3D3;
    transition: 0.3s;
  }
`;
