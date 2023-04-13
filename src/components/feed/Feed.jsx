import React from 'react'
import './Feed.css'
import Share from '../share/Share'
import Post from '../post/post'
import {Posts} from "../utils/constants"
function Feed() {
  return (
    <div className='feed'>
      <div className='feed-wrapper'>
        <Share/>
        {Posts.map((item)=>(
        <Post key={item.id} posts={item} />
        ))}
      </div>
    </div>
  )
}

export default Feed