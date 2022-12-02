import React from 'react';
import {useState} from 'react';
import AddPost from './AddPost';

const AddPostButton= (props) => {
    const[buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className='addpost-button'>
            
            <button><span class='material-icons' onClick={() => setButtonPopup(true)}>add_post</span></button>
            <AddPost trigger={buttonPopup} setTrigger = {setButtonPopup}></AddPost>
        </div>
    );
};
export default AddPostButton;