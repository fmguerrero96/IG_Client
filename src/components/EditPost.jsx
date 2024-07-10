import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

export default function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [caption, setCaption] = useState('');
    const [updated, setUpdated] = useState(false);
    const [deleted, setDeleted] = useState(false);

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
                }
            } catch(err){
                console.error('Error fetching user profile:', err);
            }
        }
        fetchPost()
    },[]);

    const updatePost = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/posts/update/${id}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ caption }),
        })

        if(response.ok){
            setUpdated(true)
        } else {
            console.log(err)
        }
    };

    const deletePost = async () => {
        const response = await fetch(`http://localhost:3000/posts/delete/${id}`, {
            credentials: 'include',
            method: 'DELETE',
        })

        if(response.ok){
            setDeleted(true)
        } else {
            console.log(error)
        }
    }

    if(updated){
        return <Navigate  to={`/post/${id}`}/>
    }
    if(deleted){
        return <Navigate to={'/homePage'}/>
    }

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
                    <button onClick={deletePost} >Delete Post</button>
                </div>
            </div>
        </div>
    )
};