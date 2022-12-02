import React from 'react';
import {useState} from 'react';
import AddPost from './AddPost';
import './AddPostButton.css';

const AddPostButton= (props) => {
    const[buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className='addpost-button'>
            
            <button className='addbutton'><span class='material-icons' onClick={() => setButtonPopup(true)}>add_post</span></button>
            <AddPost trigger={buttonPopup} setTrigger = {setButtonPopup}></AddPost>
        </div>
    );
};
export default AddPostButton;