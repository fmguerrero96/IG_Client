export default function CreatePost() {
    return(
        <div className="create-post">
            <form >
                <h2>Create new post</h2>

                <input type="file"
                name="picture"
                required
                accept=".png, .jpg, .jpeg " />

                <textarea type="text" 
                name="caption" 
                maxLength={150}
                required
                placeholder="Your caption here(optional)" />

                <button>Create Post</button>
            </form>
        </div>
    )
}