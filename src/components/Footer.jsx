import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <Link>Feed</Link>
            <Link to={'/create'}>New Post</Link>
            <Link to={'/profile'}>Profile</Link>
        </footer>
    )
};