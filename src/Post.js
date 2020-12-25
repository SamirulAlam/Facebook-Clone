import { Avatar } from '@material-ui/core';
import React, { forwardRef, useState, useEffect } from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIclon from '@material-ui/icons/AccountCircle'
import { useStateValue } from './StateProvider';
import db from './firebase';

const Post=forwardRef(({postId, image,profilePic,username,timestamp,message},ref)=> {
    const [{user},dispatch]=useStateValue();
    const [isClicked,setIsClicked] =useState(false);
    const [comments,setComments] = useState([]);

    const handleComment=()=>{
        setIsClicked(!isClicked);
        console.log("Clicked")
    }

    useEffect(()=>{
        db.collection("posts").doc(postId).collection("comments").onSnapshot(snapshot=>(
            setComments(snapshot.docs.map(doc=>({
                //id: doc.id,
                data:doc.data()
            })))
        ))
    },[])

    const postComment=(e)=>{
        e.preventDefault()
        setComments("");
    }
    return (
        <div className="post" ref={ref}>
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            {comments.map(comment=>(
                <div className="post__comment">
                <Avatar src={user.photoURL} />
                <p>{comment.data.text}</p>
            </div>
            ))}
            {isClicked ? (
                <form className="post__inputComment">
                <input value={comments} onChange={(e)=>setComments(e.target.value)} type="text" />
                <button type="submit" onClick={postComment}>Send</button>
            </form>
            ):(null)}
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option" onClick={handleComment}>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIclon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
})

export default Post
