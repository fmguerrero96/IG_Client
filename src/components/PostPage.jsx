import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import CommentSection from "./CommentSection";

export default function PostPage() {
    const {userInfo} = useContext(UserContext);
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [flag, setFlag] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await fetch(`http://localhost:3000/posts/${id}`, {
                    credentials: 'include',
                })
                if (response.ok){
                    const postInfo = await response.json();
                    //Check if user has liked post
                    if(postInfo.likes_count.includes(userInfo.id)){
                        postInfo.hasLiked = true
                    } else {
                        postInfo.hasLiked = false
                    }
                    setPost(postInfo);
                    // console.log(postInfo)
                }
            } catch(err){
                console.error('Error fetching user profile:', err);
            }
            setFlag(true)
        }
        fetchPost()
    },[flag]);

    const handleLikeClick = async (postId) => {
        try {
            const response = await fetch(`http://localhost:3000/posts/${postId}/like`, {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                const result = await response.json();
                const updatedPost = post;
                updatedPost.likes_count = result.likes_count;
                updatedPost.hasLiked = result.hasLiked;
                setPost(updatedPost);
            } else {
                console.error('Failed to like/unlike post');
            }
        } catch (error) {
            console.error('Error liking/unliking post:', error);
        }
        setFlag(!flag)
    };

    return(
        <div  className="post-page">
            <div className="single-post">
                <img className="post-picture" src={`http://localhost:3000/${post.picture}`}/>
                <div className="single-post-info">
                    <div className="container">
                        <span style={{fontWeight: '900'}}>{post.author?.username}</span>
                        <span>...{post.caption}</span>

                        <svg className={`icon-heart${post.hasLiked ? 'Liked' : ''}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        fill="#e8eaed"
                        onClick={() => handleLikeClick(post?._id)}
                        >
                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
                        />
                    </svg>
                    </div>
                    
                    <p style={{marginBottom: '1%'}}>{post.likes_count?.length} Likes</p>
                    <p>{post.time_stamp && format(post.time_stamp, 'MMM d, yyyy')}</p>
                    {post.author?._id === userInfo.id && (
                        <p><Link to={`/editPost/${post._id}`}>Edit Post</Link></p>
                    )}
                </div>
            </div>
            <CommentSection postID={id}/>
        </div>
    )
};