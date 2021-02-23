import React from 'react';
import Post from './Posts'

function PostList({ posts }){
    return(
        posts.map(post => 
            <Post key={post.id} {...post} />
          )
    )
}

export default PostList;