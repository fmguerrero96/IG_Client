import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
    const [userProfile, setUserProfile] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getProfile = async () => {
            try{
                const response = await fetch('http://localhost:3000/user', {
                    credentials: 'include',
                })

                if(response.ok){
                    const profile = await response.json()
                    setUserProfile(profile)
                    setPosts(profile.posts)
                }
            } catch(err) {
                console.error('Error fetching profile:', err);
            }
        }

        getProfile()
    }, []);

    return(
        <main className="profile">
            <div className="profile-info">
                <span>
                    {userProfile.profile_pic ? (<div className="circle">
                        <img className="profile-pic" src={`http://localhost:3000/${userProfile.profile_pic}`}/>
                    </div>) : (
                       <img className="profile-pic" src="../src/assets/account_circle.png" alt="profile picture" />
                    )}
                    <span>{userProfile.username}</span>
                </span>
                <span className="post-count">
                    <span>{userProfile.posts ? (userProfile.posts.length) : (0)}</span>
                    <span>Posts</span>
                </span>
                <span className="follower-count">
                    <span>{userProfile.followers ? (userProfile.followers.length) : (0)}</span>
                    <span>Followers</span>
                </span>
                <span className="following-count">
                    <span>{userProfile.following ? (userProfile.following.length) : (0)}</span>
                    <span>Following</span>
                </span>
            </div>

            <Link className="edit-profile-link" to={`/editProfile`}>
                <button className="edit-profile">Edit Profile</button>
            </Link>

            {posts.length > 0 && (
                <div className="profile-gallery">
                    {posts.map(post => (
                        <Link className="img-link" key={post._id} to={`/post/${post._id}`}>
                            <img className="pic" src={`http://localhost:3000/${post.picture}`} />
                        </Link>
                        ))
                    }
                </div> 
            )} 
            {posts.length === 0 && (
                <div className="noPosts">No posts yet</div>
            )}
        </main>
    )
};