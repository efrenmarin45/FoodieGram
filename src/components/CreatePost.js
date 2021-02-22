import React, {useState} from 'react';

function CreatePost({ user }){
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState(null);

    return(
        <div>
            <h1>Create New Posts</h1>
            <form>
                <input 
                type="text" 
                placeholder="Add Foodie Photo" 
                onChange={event => setContent(event.target.value)} 
                />
                <input 
                type="file" 
                onChange={event => setPhoto(event.target.files[0])}
                />
                <button type="submit">Submit Post</button>
            </form>
            <p>{content}</p>
            {photo &&
                <img style={{height: 200, width: 200, objectFit:'cover'}}
                src={URL.createObjectURL(photo)} />
            }
        </div>
    )
}

export default CreatePost;