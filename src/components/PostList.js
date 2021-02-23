import React from 'react';
import Post from './Posts'

function PostList({ posts }){
    return(
        posts.map((post, index) => (
            <Post key={index} {...post} />
          ))
    )
}

export default PostList;