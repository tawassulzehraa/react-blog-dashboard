import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog, toggleFeatured, setSearchText, setCategory, fetchBlogsMock } from './redux/blogSlice';
import { useFilteredBlogs } from './hooks/useFilteredBlogs';
import { initialBlogs } from './data/blogData';
import Header from './components/Header';
import BlogStats from './components/BlogStats';
import SearchBar from './components/SearchBar';
import BlogList from './components/BlogList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // Part 4: Access ALL variables from the global Redux store using useSelector
  const blogs = useSelector((state) => state.blogs.items);
  const searchText = useSelector((state) => state.blogs.searchText);
  const selectedCategory = useSelector((state) => state.blogs.selectedCategory);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);

  // Extract a unique list of categories for our dropdown filter selector
  const categories = [...new Set(initialBlogs.map(b => b.category))];

  // Process card array updates using your custom filtration hook
  const filteredBlogs = useFilteredBlogs(blogs, searchText, selectedCategory);

  // Part 5: Trigger mock API runtime operations upon application initialization
  useEffect(() => {
    dispatch(fetchBlogsMock(false)); 
  }, [dispatch]);

  // Redux change update handlers
  const handleSearchChange = useCallback((text) => {
    dispatch(setSearchText(text));
  }, [dispatch]);

  const handleCategoryChange = useCallback((cat) => {
    dispatch(setCategory(cat));
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteBlog(id));
  }, [dispatch]);

  const handleToggleFeatured = useCallback((id) => {
    dispatch(toggleFeatured(id));
  }, [dispatch]);

  // Part 5: Conditional UI layouts processing async indicators
  if (loading) {
    return (
      <div className="app-container" style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>🔄 Loading Dashboard State from Redux...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container" style={{ textAlign: 'center', marginTop: '100px', color: '#e74c3c' }}>
        <h2>⚠️ Async Action Error Triggered!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <BlogStats blogs={filteredBlogs} />
      <SearchBar 
        searchText={searchText} 
        setSearchText={handleSearchChange} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={handleCategoryChange} 
        categories={categories}
      />
      <BlogList 
        blogs={filteredBlogs} 
        onDelete={handleDelete} 
        onToggleFavorite={handleToggleFeatured}
        favorites={[]}
      />
    </div>
  );
}

export default App;
