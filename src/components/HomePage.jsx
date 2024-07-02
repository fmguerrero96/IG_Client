import { useEffect, useState } from "react";
import FeedCard from "./FeedCard";

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const response = await fetch(`http://localhost:3000/feed/`, {
                    credentials: 'include',
                    method: 'GET'
                });

                if (response.ok) {
                    const feed = await response.json();
                    setPosts(feed);
                } else {
                    console.error('Failed to fetch feed');
                }
            } catch (error) {
                console.error('Error fetching feed:', error);
            }
        };

        fetchFeed();
    }, [posts.likes_count]);

    const handleLikeClick = async (postId, index) => {
        try {
            const response = await fetch(`http://localhost:3000/posts/${postId}/like`, {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result)
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