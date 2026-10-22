import { useMemo } from 'react';

export const useFilteredBlogs = (blogs, searchText, selectedCategory) => {
  return useMemo(() => {
    return blogs.filter(blog => {
      // Check if the search text matches either the blog title or author
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchText.toLowerCase());
        
      // Check if a specific dropdown category filter is applied
      const matchesCategory = 
        selectedCategory === "" || 
        blog.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchText, selectedCategory]);
};
