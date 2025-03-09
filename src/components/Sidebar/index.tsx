import React, { useState } from "react";
import * as Styled from "./styles";

const Sidebar: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Styled.SidebarContainer>
      <Styled.Title>Menu</Styled.Title>
      <Styled.SearchInput
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={handleSearchChange}
      />
      <Styled.Separator />
      <Styled.SectionTitle>Home</Styled.SectionTitle>
      <Styled.SectionTitle>Today</Styled.SectionTitle>
      <Styled.SectionTitle>Upcoming</Styled.SectionTitle>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
