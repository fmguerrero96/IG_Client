import { format } from "date-fns";

export default function FeedCard({ posts }){
    return(
        <div className="feed">
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post._id} className="post-card">
                        <img src={`http://localhost:3000/${post.picture}`} />

                        <div className="post-info">
                            <span className="author">{post.author.username}
                                <span className="caption">...{post.caption}</span>

                                <svg className="icon-heart" xmlns="http://www.w3.org/2000/svg" 
                                    height="24px" 
                                    viewBox="0 -960 960 960" 
                                    width="24px" 
                                    fill="#e8eaed">
                                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                                </svg>   

                                <svg className="icon-comment" xmlns="http://www.w3.org/2000/svg" 
                                    height="24px" 
                                    viewBox="0 -960 960 960" 
                                    width="24px" 
                                    fill="#0088fe">
                                    <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
                                </svg>
                            </span>

                            <span>{post.likes_count} likes</span>

                            <span>{post.comments.length} comments</span>
                            <span>{format(post.time_stamp, 'MMM d, yyyy HH:mm') }</span>
                        </div>
                        <hr />
                    </div>
                ))
                ) : (
                <div className="emptyFeed">
                    <p>Nothing to show here</p>
                    <p className="message">Use the search bar to find and follow people </p>
                </div>
            )}
        </div>
    )
};