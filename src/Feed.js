import React from 'react';
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                        profilePic="https://avatars1.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                        message="Wala"
                        timestamp="asasa"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/300px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg"
                        username="Samir"
                    />
            <Post
                        profilePic="https://avatars1.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                        message="Wala"
                        timestamp="asasa"
                        
                        username="Samir"
                    />
        </div>
    )
}

export default Feed
