import { useState, useContext } from "react"
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

export default function CreatePost() {
    const [caption, setCaption] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('')
    const {userInfo} = useContext(UserContext);

    const createNewPost = async function(e){
        e.preventDefault()

        const data = new FormData();
        data.set('caption', caption)
        data.set('file', files[0])
        data.set('author', userInfo.id)

        const response = await fetch('http://localhost:3000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        })

        if(response.ok){
            setRedirect(true)
        } else {
            await response.json()
            setError(response)
        }
    };

    if(redirect){
        return <Navigate  to={'/homePage'}/>
    }

    return(
        <div className="create-post">
            <form onSubmit={createNewPost}>
                <h2>Create new post</h2>

                <input type="file"
                name="file"
                required
                accept=".png, .jpg, .jpeg "
                onChange={e => setFiles(e.target.files)} />

                <textarea type="text" 
                name="caption" 
                maxLength={150}
                placeholder="Your caption here(optional)"
                value={caption}
                onChange={e => setCaption(e.target.value)} />

                <button>Create Post</button>
                {error && <div>{error.error}</div>}
            </form>
        </div>
    )
};