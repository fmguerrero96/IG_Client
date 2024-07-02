import { useEffect, useState, useContext } from "react";
import FeedCard from "./FeedCard";
import { UserContext } from "../UserContext";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const {userInfo} = useContext(UserContext);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const response = await fetch(`http://localhost:3000/feed/`, {
                    credentials: 'include',
                    method: 'GET'
                });

                if (response.ok) {
                    const feed = await response.json();

                    //Check if posts in feed have been liked by logged in user
                    feed.forEach(post => {
                        //set the post to like/not liked
                        if(post.likes_count.includes(userInfo.id) || post.likes_count.includes((userInfo._id))){
                            post.hasLiked = true
                        } else {
                            post.hasLiked = false
                        }
                    });
                    setPosts(feed);
                } else {
                    console.error('Failed to fetch feed');
                }
            } catch (error) {
                console.error('Error fetching feed:', error);
            }
        };

        fetchFeed();
    }, [userInfo]);

    const handleLikeClick = async (postId, index) => {
        try {
            const response = await fetch(`http://localhost:3000/posts/${postId}/like`, {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                const result = await response.json();
                const updatedPosts = [...posts];
                updatedPosts[index].likes_count = result.likes_count;
                updatedPosts[index].hasLiked = result.hasLiked;
                setPosts(updatedPosts);
            } else {
                console.error('Failed to like/unlike post');
            }
        } catch (error) {
            console.error('Error liking/unliking post:', error);
        }
    };
        
    return(
        <main className="home-page">
            <FeedCard posts={posts} handleLikeClick={handleLikeClick}/>
        </main>
    )
};