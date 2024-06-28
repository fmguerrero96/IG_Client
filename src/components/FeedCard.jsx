import { format } from "date-fns";

export default function FeedCard({ posts }){
    return(
        <div className="feed">
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post._id} className="post-card">
                        <img src={`http://localhost:3000/${post.picture}`} />

                        <div className="post-info">
                            <span className="author">{post.author.username}: 
                                <span className="caption"> {post.caption}</span>
                            </span>

                            <span>{post.likes_count} likes</span>

                            <span>{post.comments.length} comments</span>
                            <span>{format(post.time_stamp, 'MMM d, yyyy HH:mm') }</span>
                        </div>
                        <hr />
                    </div>
                ))
                ) : (
                <div>No Posts to display</div>
            )}
        </div>
    )
};