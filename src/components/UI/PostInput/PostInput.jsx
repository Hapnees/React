import React from 'react'
import classes from './PostInput.module.css';

const PostInput = (props) => {
  return (
    <input className={classes.input} type="text" {...props}/>
  )
}

export default PostInput
