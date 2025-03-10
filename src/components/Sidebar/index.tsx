import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Search";
import * as Styled from "./styles";

const Sidebar: React.FC = () => {
    return (
        <Styled.SidebarContainer>
            <Styled.Title>TODO</Styled.Title>
            <SearchBar />
            <Styled.Separator />
            <Styled.SectionTitle>
                <Link to={"/"}>🏠 Home</Link>
            </Styled.SectionTitle>
            <Styled.SectionTitle>
                <Link to={"/completed"}>✔️ Completed</Link>
            </Styled.SectionTitle>
        </Styled.SidebarContainer>
    );
};

export default Sidebar;
