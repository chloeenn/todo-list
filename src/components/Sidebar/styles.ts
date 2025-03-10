import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border-radius: 12px;
  background-color: #fff;
  padding: 20px;
  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px;
  overflow-y: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin-bottom: 15px;
`;

export const SectionTitle = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin: 5px 0;
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    background-color: #D3D3D3;
    transition: 0.3s ease-out;
  }

  & > a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid #f1f1f1;
  margin: 20px 0;
`;
