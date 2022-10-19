import React from "react";
import Post from "./Post"

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts, handleDelete}) {
  /*create a variable that stores an array using map to grab the specific post and it's index*/ 
  const postList = posts.map((post, index) => {
   // we are returning a jsx component 
    return (
        <Post 
          type={post.type}
          content={post.content}
          handleDelete={() => handleDelete(index)}
          key={index}
        />
    )
  })
  
  if (posts.length === 0) {
    return null
  } else {
    return (
      <ul>
        {postList}
      </ul>
    )
  }
}

export default PostList;
