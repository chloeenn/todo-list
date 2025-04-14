import React from "react";
import * as Styled from "./styles";
import Home from "../../pages/Home";
import Sidebar from "../Sidebar";
import Completed from "../../pages/CompletedTask";
import { Routes, Route } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Styled.LayoutContainer>
      <Sidebar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </Styled.LayoutContainer>
  );
};

export default Layout;