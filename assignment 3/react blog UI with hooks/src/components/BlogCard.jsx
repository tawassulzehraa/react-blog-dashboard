import React from 'react';

// Part 4: Wrap the component in React.memo to skip unnecessary card re-renders
const BlogCard = React.memo(({ blog, onDelete, onToggleFavorite, isFavorite }) => {
  return (
    <div className={`blog-card ${blog.featured ? 'is-featured' : ''}`}>
      <div className="card-header">
        <span className="category-badge">{blog.category}</span>
        {blog.featured && <span className="featured-badge">⭐ Featured</span>}
      </div>
      
      <h3 className="card-title">{blog.title}</h3>
      <p className="card-author">By: <strong>{blog.author}</strong></p>
      <p className="card-time">⏱️ {blog.readingTime} min read</p>

      <div className="card-actions">
        <button 
          onClick={() => onToggleFavorite(blog.id)}
          className={`btn-fav ${isFavorite ? 'favorited' : ''}`}
        >
          {isFavorite ? '❤️ Favorited' : '🤍 Favorite'}
        </button>
        <button 
          onClick={() => onDelete(blog.id)}
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
});

export default BlogCard;
