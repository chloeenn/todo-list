import React, { useState } from "react";
import * as Styled from "./styles";
const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Styled.SearchInput
      type="text"
      placeholder="Search is not supported yet 😃"
      value={search}
      onChange={handleSearch}
    />
  );
}
export default SearchBar;