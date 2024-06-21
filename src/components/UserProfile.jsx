import { useEffect, useState, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function UserProfile() {
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const [posts, setPosts] = useState(null)
    const {userInfo} = useContext(UserContext);
    const [isFollowing, setIsFollowing] = useState(null)

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}`, {
                    credentials: 'include',
                });

                if (response.ok) {
                    const profile = await response.json();
                    setUserProfile(profile);
                    setPosts(profile.posts)
                } else {
                    console.error('User profile not found');
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [id, isFollowing]);

    useEffect(() => {
        const checkFollow = async() => {
            try{
                const response = await fetch(`http://localhost:3000/follow/${userInfo.id || userInfo._id}/user?user=${id}`, {
                    credentials: 'include',
                })
                const follows = await response.json()
                setIsFollowing(follows)
            } catch(err) {
                console.log(err)
            }
        }
        checkFollow();
    });

    const handleFollow = async() => {
        try{
            const response = await fetch(`http://localhost:3000/follow/${userInfo.id || userInfo._id}/user?user=${id}`, {
                credentials: 'include',
                method: 'POST'
            })
            const res = await response.json()
            setIsFollowing(!isFollowing)
        } catch(err) {
            console.log(err)
        }
    };

    if (!userProfile) {
        return <div className="user-profile">Loading...</div>;
    }
    if ((userInfo.id || userInfo._id) === id) {
        //Navigate to '/profile' if user is searching for its own profile
        return <Navigate to={'/profile'}/>
    }

    return (
    <main className="profile">
        <div className="profile-info">
            <span>
                <img className="profile-pic" src="../src/assets/account_circle.png" alt="profile picture" />
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

        {isFollowing ? (
            <button className="follow-btn" onClick={handleFollow}>Unfollow</button>
        ) : (
            <button className="follow-btn" onClick={handleFollow}>Follow</button>
        )}

        <div className="profile-gallery">
            {posts.length > 0 && (
                 posts.map(post => (
                    <img className="pic" src={`http://localhost:3000/${post.picture}`} key={post._id}/>
                 ))
            )} 
        </div>
        {posts.length === 0 && (
            <div className="noPosts">No posts yet</div>
        )}
    </main>
    );
};