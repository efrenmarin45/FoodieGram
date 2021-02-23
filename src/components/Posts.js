import React from 'react';

function Posts({ photo, content, user }){
    return(
        <>
              {photo && (
                <img
                  style={{height: 200, width: 200, objectFit: 'cover' }}
                  src={URL.createObjectURL(photo)}
                  alt="Foodie Post"
                />
              )}
              <p>{content}</p>
              <div>{user}</div>
        </>
    )
}

export default Posts;