# 📝 React Blog Dashboard with Hooks & Redux Toolkit

A highly optimized and interactive React Blog Dashboard application featuring custom performance state hooks, structural layouts using plain CSS vanilla grids, and global state management orchestrated with Redux Toolkit.

## 🚀 Key Functional Architectures
- **Custom Filtering Hook (`useFilteredBlogs`)**: Uses `useMemo` optimizations to filter blog titles and author fields instantly without triggering unneeded component re-renders.
- **Global Store Management**: Manages state objects via centralized Redux Toolkit dispatch operations (`useSelector` / `useDispatch`) for items, search strings, and filter configurations.
- **Performance Implementations**: Utilizes `React.memo` structures paired with `useCallback` hook bindings to preserve functional instances across application lifecycle loops.
- **Asynchronous State Simulation**: Configures `createAsyncThunk` middleware structures to intercept, log, and conditionally handle mock data stream loading and network failures.

## 🛠️ Built With
- **Frontend Core**: React 18 & Vite
- **Global State**: Redux Toolkit & React-Redux
- **Styling Architecture**: Vanilla CSS Grid & Flexbox
