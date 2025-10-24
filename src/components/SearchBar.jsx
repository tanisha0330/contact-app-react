// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <input
        className="w-full p-3 pl-10 sketch-border focus:outline-none focus:ring-2 focus:ring-(--primary-orange)"
        type="text"
        placeholder="Search for a contact..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

export default SearchBar;