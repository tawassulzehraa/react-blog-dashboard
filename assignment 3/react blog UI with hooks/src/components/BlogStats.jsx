import React from 'react';

const BlogStats = ({ blogs }) => {
  const totalBlogs = blogs.length;
  const featuredCount = blogs.filter(b => b.featured).length;
  const totalReadingTime = blogs.reduce((sum, b) => sum + b.readingTime, 0);

  return (
    <div className="stats-container">
      <div className="stat-card total">
        <h3>Total Blogs</h3>
        <p>{totalBlogs}</p>
      </div>
      <div className="stat-card featured">
        <h3>⭐ Featured</h3>
        <p>{featuredCount}</p>
      </div>
      <div className="stat-card time">
        <h3>⏱️ Total Reading Time</h3>
        <p>{totalReadingTime} mins</p>
      </div>
    </div>
  );
};

export default BlogStats;
