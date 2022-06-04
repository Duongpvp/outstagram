import React from 'react'
import './Posts.css'
import {PostsData} from '../../Data/PostsData.jsx'
import Post from '../Post/Post.jsx'
const Posts = () => {
  return (
    <div className="Post">
        {PostsData.map((post,id)=> {
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts