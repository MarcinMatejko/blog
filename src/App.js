import React from 'react';
import { Header } from './components/Header';
import { BlogList } from './components/BlogList';
import { AddPost } from './components/AddPost';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
       <Header />
       <BlogList />
       <AddPost />
    </GlobalProvider>
  );
}

export default App;
