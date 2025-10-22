// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      style={{
        width: '90%',
        padding: '10px',
        fontSize: '16px',
        margin: '20px 0'
      }}
      type="text"
      placeholder="Search for a contact..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;