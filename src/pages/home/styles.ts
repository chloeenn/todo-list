import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  border-radius: 12px;
  background-color: #fff;
  padding: 20px;
  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px;
`;

export const MainContainer = styled.div`
display: flex;
width: 78%;
`
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin-bottom: 15px;
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
