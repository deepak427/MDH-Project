import React from 'react'
import Post from './Post'

const PostList = ({postList}) => {
  return (
    <>
      {postList.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </>
  )
}

export default PostList
