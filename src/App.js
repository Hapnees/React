import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostCreate from "./components/PostCreate/PostCreate";
import PostList from "./components/PostList/PostList";
import './styles/App.css';

const App = () => {

  const [posts, setPosts] = useState([
    {'id': 1, 'title': 'Some title', 'body': 'Some body'},
    {'id': 2, 'title': 'Some title', 'body': 'Some body'},
    {'id': 3, 'title': 'Some title', 'body': 'Some body'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  const createPost = (newPost) => {
   setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/'
          element={<PostList 
          sortPosts={sortPosts} 
          selectedSort={selectedSort} 
          remove={removePost} 
          posts={posts}/>}/>
          <Route path='post_create' element={<PostCreate create={createPost}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;