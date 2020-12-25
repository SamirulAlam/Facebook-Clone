import React, { useEffect, useState } from 'react';
import './Feed.css'
import db from './firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import FlipMove from "react-flip-move"

function Feed() {

    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
        ))
    },[])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

           <FlipMove>
           {posts.map((post)=>(
                <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                image={post.data.image}
                username={post.data.username}
            />
            ))}
           </FlipMove>
            
        </div>
    )
}

export default Feed
