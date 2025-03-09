import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import AddTask from "../../components/AddTask";
import * as Styled from "./styles";

const Home: React.FC = () => {
  return (
    <Styled.HomeContainer>
      <Sidebar></Sidebar>
      <AddTask></AddTask>
    </Styled.HomeContainer>

  );
};

export default Home;
