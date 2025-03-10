import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "src/components/SearchBar";
import * as Styled from "./styles";

const Sidebar: React.FC = () => {
    return (
        <Styled.SidebarContainer>
            <Styled.Title>Menu</Styled.Title>
            <SearchBar />
            <Styled.Separator />
            <Styled.SectionTitle>
                <Link to={"/"}>Home</Link>
            </Styled.SectionTitle>
            <Styled.SectionTitle>
                <Link to={"/completed"}>Completed</Link>
            </Styled.SectionTitle>
            <Styled.SectionTitle>Upcoming</Styled.SectionTitle>
        </Styled.SidebarContainer>
    );
};

export default Sidebar;
