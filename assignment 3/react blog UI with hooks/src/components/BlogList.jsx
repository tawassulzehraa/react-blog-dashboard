import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs, onDelete, onToggleFavorite, favorites }) => {
  if (blogs.length === 0) {
    return <p className="no-results">No blogs found matching your criteria.</p>;
  }

  return (
    <div className="blog-list-grid">
      {blogs.map(blog => (
        <BlogCard 
          key={blog.id} 
          blog={blog} 
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(blog.id)}
        />
      ))}
    </div>
  );
};

export default BlogList;
