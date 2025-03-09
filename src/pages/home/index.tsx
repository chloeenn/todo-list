import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CreateTask from "../../components/CreateTask";
import Separator from "../../components/Separator";
import * as Styled from "./styles";
import TaskList from "../../components/TaskList";

const Home: React.FC = () => {
  return (
    <Styled.HomeContainer>
      <Styled.SidebarContainer>
        <Styled.Title>Menu</Styled.Title>
        <SearchBar />
        <Separator />
        <Styled.SectionTitle>Home</Styled.SectionTitle>
        <Styled.SectionTitle>Today</Styled.SectionTitle>
        <Styled.SectionTitle>Upcoming</Styled.SectionTitle>
      </Styled.SidebarContainer>
      <Styled.MainContainer>
        <CreateTask/>
        <TaskList/>
      </Styled.MainContainer>

    </Styled.HomeContainer>

  );
};

export default Home;
