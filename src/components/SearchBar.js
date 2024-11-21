import React from "react";
import '../styles.css'

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search currency or country"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;
