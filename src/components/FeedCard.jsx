export default function FeedCard({ posts }){
    return(
        <div>
            {posts.length > 0 ? (
            posts.map(post => (
                <div key={post._id} className="post-card">
                    <img src={`http://localhost:3000/${post.picture}`} />
                    <div>{post.caption}</div>
                    <div>Posted by: {post.author.username}</div>
                    <div>{new Date(post.time_stamp).toLocaleString()}</div>
                </div>
            ))
            ) : (
                <div>No Posts to display</div>
            )}
        </div>
    )
};