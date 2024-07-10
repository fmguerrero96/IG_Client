import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";

export default function EditPost() {
    // const {userInfo} = useContext(UserContext);
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [caption, setCaption] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await fetch(`http://localhost:3000/posts/${id}`, {
                    credentials: 'include',
                })
                if (response.ok){
                    const postInfo = await response.json();
                    setPost(postInfo);
                    setCaption(postInfo.caption)
                    // console.log(postInfo)
                }
            } catch(err){
                console.error('Error fetching user profile:', err);
            }
        }
        fetchPost()
    },[]);
    
    return (
        <div className="edit-post-page">
            <div className="edit-container">
                <img className="edit-pic" src={`http://localhost:3000/${post.picture}`}/>
                <div className="edit-post-info">
                    <form onSubmit={updatePost} >
                        <label htmlFor="caption">Caption: </label>
                        <input type="text"
                        name="caption"
                        id="caption"
                        value={caption}
                        maxLength={150}
                        onChange={e => setCaption(e.target.value)} /> 
                        <button>Update</button>
                    </form>
                    <button>Delete Post</button>
                </div>
            </div>
        </div>
    )
};