import React, {useState, useRef} from 'react';

function CreatePost({ user, handleAddPost }){
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState(null);
    const photoInputRef = useRef();

    function handleSubmit(event){
        event.preventDefault();
        const post = { content: content, photo: photo, user: user };
        handleAddPost(post);
        setContent('');
        photoInputRef.current.value = '';
    }

    return(
        <div>
            <h1>Create New Posts</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Add Foodie Photo" 
                onChange={event => setContent(event.target.value)}
                value={content} 
                />
                <input 
                type="file" 
                onChange={event => setPhoto(event.target.files[0])}
                ref={photoInputRef}
                />
                <button type="submit">Submit Post</button>
            </form>
        </div>
    )
}

export default CreatePost;