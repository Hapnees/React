/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './PostCreate.module.css';
import { NavLink } from 'react-router-dom';
import PostInput from '../UI/PostInput/PostInput'
import PostButton from '../UI/PostButton/PostButton';

const PostCreate = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    };
    create(newPost);
    setPost({title: '', body: ''});
  };

  return (
    <form className={classes.form}>
      <h3 className='title'>Post creating</h3>
      <div className={classes.inner}>
          <div className={classes.inputs}>
            <PostInput 
            onChange={e => setPost({...post, title: e.target.value})}
            value={post.title}
            type="text" 
            placeholder="Post title"
            />
            <PostInput
            onChange={e => setPost({...post, body: e.target.value})}
            value={post.body}
            type="text" 
            placeholder="Post body"
            />
          </div> 
          <PostButton className="btn" onClick={addPost}>Create</PostButton>
      </div> 
      <NavLink to='/'><PostButton className='btn-block'>Back</PostButton></NavLink>
    </form>
  )
}

export default PostCreate
