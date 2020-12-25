import { Avatar } from '@material-ui/core';
import "./Comment.css"
import React from 'react'
import { useStateValue } from './StateProvider';

function Comment({text}) {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="comment">
            <Avatar src={user.photoURL} />
            <p>{text}</p>
        </div>
    )
}

export default Comment
