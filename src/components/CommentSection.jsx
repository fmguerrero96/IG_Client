import { useState, useEffect } from "react";

export default function CommentSection({ postID }) {
    const [comment, setComment] = useState('');
    const [commentsArray, setCommentsArray] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            try{
                const response = await fetch(`http://localhost:3000/comment/${postID}`, {
                    method: 'GET',
                })
                if(response.ok){
                    const comments = await response.json()
                    setCommentsArray(comments)
                }
            } catch (err){
                console.log(err)
            }
        }
        getComments()
    }, [])

    const handleComment = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch(`http://localhost:3000/comment/${postID}`, {
                method: 'POST',
                body: JSON.stringify({comment}),
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            })

            if(response.ok){
                setComment('')
            }

        } catch(err){
            console.error('Could not post new comment', err);
        }
    }

    return(
        <div className="comment-section">
            <form onSubmit={handleComment}>
                <textarea type="text" 
                    name="comment" 
                    required
                    maxLength={75}
                    placeholder="Add a comment..."
                    rows={3}
                    value={comment}
                    onChange={e => setComment(e.target.value)} 
                />
                <button>submit</button>
            </form>
            <div className="comments">
                {commentsArray[0]?.author.username}{commentsArray[1]?.author.username}
            </div>
        </div>
    )
};