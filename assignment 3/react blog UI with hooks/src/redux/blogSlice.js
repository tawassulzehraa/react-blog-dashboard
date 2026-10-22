import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialBlogs } from '../data/blogData';

// Part 5: Simulated asynchronous action using createAsyncThunk to fetch data
export const fetchBlogsMock = createAsyncThunk(
  'blogs/fetchBlogsMock',
  async (shouldFail = false, { rejectWithValue }) => {
    // Simulating a 1.5-second network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    if (shouldFail) {
      return rejectWithValue('Network Connection Error: Failed to fetch dashboard data.');
    }
    return initialBlogs;
  }
);

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    items: initialBlogs,      // Part 2: Store blogs dataset array
    searchText: '',           // Part 2: Store search query text string
    selectedCategory: '',     // Part 2: Store selected filter category option
    loading: false,           // Part 2 & Part 5: Core asynchronous loading toggle
    error: null               // Part 2 & Part 5: Error storage element
  },
  reducers: {
    // Part 3: Action to add a brand-new blog entry object
    addBlog: (state, action) => {
      state.items.push(action.payload);
    },
    // Part 3: Action to delete a chosen blog layout index
    deleteBlog: (state, action) => {
      state.items = state.items.filter(blog => blog.id !== action.payload);
    },
    // Part 3: Action to change a blog's feature banner status
    toggleFeatured: (state, action) => {
      const blog = state.items.find(b => b.id === action.payload);
      if (blog) {
        blog.featured = !blog.featured;
      }
    },
    // Part 3: Action to track live inputs inside your search block
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    // Part 3: Action to update category selection states globally
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
  // Part 5: Handling loading and error behaviors using extraReducers builders
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsMock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogsMock.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBlogsMock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  }
});

export const { 
  addBlog, 
  deleteBlog, 
  toggleFeatured, 
  setSearchText, 
  setCategory 
} = blogSlice.actions;

export default blogSlice.reducer;
