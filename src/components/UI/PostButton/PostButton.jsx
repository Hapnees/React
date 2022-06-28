/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classes from './PostButton.module.css';

const PostButton = (props) => {
  return (
    <button {...props} className={`${classes.btn} ${props.className}`}>
     {props.children} 
    </button>
  )
}

export default PostButton
