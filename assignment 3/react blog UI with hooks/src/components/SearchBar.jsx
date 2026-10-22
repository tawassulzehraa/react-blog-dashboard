import React, { useEffect, useRef } from 'react';

const SearchBar = ({ searchText, setSearchText, selectedCategory, setSelectedCategory, categories }) => {
  const inputRef = useRef(null);

  // Part 4: Automatically focus the search input field as soon as the app loads
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="search-bar-container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by title or author..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select"
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
