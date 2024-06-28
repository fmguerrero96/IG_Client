import { format } from "date-fns";

export default function FeedCard({ posts }){
    return(
        <div className="feed">
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post._id} className="post-card">
                        <img src={`http://localhost:3000/${post.picture}`} />

                        <div className="post-info">
                            <span>By: {post.author.username}</span>
                            <span>{post.caption}</span>
                            <span>Likes: {post.likes_count}</span>
                            <span>Comments: {post.comments.length}</span>
                            <span>{format(post.time_stamp, 'MMM d, yyyy HH:mm') }</span>
                        </div>
                    </div>
                ))
                ) : (
                <div>No Posts to display</div>
            )}
        </div>
    )
};