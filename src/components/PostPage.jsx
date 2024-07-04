import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const {userInfo} = useContext(UserContext);
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await fetch(`http://localhost:3000/posts/${id}`, {
                    credentials: 'include',
                })
                if (response.ok){
                    const postInfo = await response.json();
                    setPost(postInfo);
                    console.log(postInfo)
                }
            } catch(err){
                console.error('Error fetching user profile:', err);
            }
        }
        fetchPost()
    }, [id]);

    return(
        <div  className="post-page">
            <img className="post-picture" src={`http://localhost:3000/${post.picture}`}/>
        </div>
    )
};