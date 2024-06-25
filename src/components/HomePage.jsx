import { useEffect, useState } from "react";

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
    }, []);
        
    return(
        <main className="home-page">
            <div>
                not implemented
            </div>
        </main>
    )
};