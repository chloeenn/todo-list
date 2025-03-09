import React, { useState } from "react";
import * as Styled from "./styles";
const SearchBar : React.FC = () => {
    const [search, setSearch] = useState("");
    
      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };
    
    return (
        <Styled.SearchInput
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={handleSearchChange}
              />
    );
}
export default SearchBar;