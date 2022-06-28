/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PostButton from '../../UI/PostButton/PostButton';
import classes from './PostItem.module.css';

const PostItem = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <div>
          <h3 className="title">{props.number}.{props.post.title}</h3>
          <span>{props.post.body}</span>
        </div>
        <PostButton onClick={() => props.remove(props.post)} className="btn">Delete</PostButton>
      </div>
    </div>
  )
}

export default PostItem
