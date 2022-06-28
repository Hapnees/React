/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import PostItem from './PostItem/PostItem';
import PostButton from '../UI/PostButton/PostButton';
import classes from './PostList.module.css';
import {NavLink} from 'react-router-dom';
import PostSelector from '../UI/PostSelector/PostSelector';


const PostList = ({posts, remove, selectedSort, sortPosts}) => {

  return (
    <div>
      {posts.length !== 0
      ?
      <div>
        <div className={classes.header}>
          <PostSelector
            value={selectedSort}
            onChange = {sortPosts}
            defaultValue="Sort"
            options={[
              {value: 'title', name: 'by title'},
              {value: 'body', name: 'by body'}
            ]}
          />
          <h2 className="title" style={{marginLeft: '155px'}}>Posts</h2>
        </div>
        <NavLink to="/post_create"><PostButton className='btn-block'>Create post</PostButton></NavLink>
        <ul>
          {posts.map((post, index) => 
            <li className={classes.list__item} key={post.id}><PostItem remove={remove} number={index + 1} post={post} /></li> 
          )}
        </ul>
      </div>
      :
      <div>
        <h1 className='title'>Posts not found</h1>
        <NavLink to="/post_create"><PostButton className='btn-block'>Create post</PostButton></NavLink>
      </div>
      }
    </div>
  )
}

export default PostList
