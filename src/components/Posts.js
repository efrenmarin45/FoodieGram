import React, { useContext } from 'react';
import { UserContext, PostContext } from '../App.js';

function Posts({ photo, content, user, id }){
  const currentUser = useContext(UserContext);
  const {dispatch} = useContext(PostContext)
  const isCurrentUser = currentUser === user;

  function handleDeletePost(){
    dispatch({ type: "DELETE_POST", payload: { id } });
  }

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
        <div style={{ color: isCurrentUser && 'green' }}>{user}</div>
        {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
      </>
    );
}

export default Posts;