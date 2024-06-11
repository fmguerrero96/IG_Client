import { useState, useEffect, useContext } from "react";
// import { UserContext } from "../UserContext";

export default function Profile() {
    const [userProfile, setUserProfile] = useState({})
    // const { userInfo } = useContext(UserContext);

    useEffect(() => {
        const getProfile = async () => {
            try{
                const response = await fetch('http://localhost:3000/user', {
                    credentials: 'include',
                })

                if(response.ok){
                    setUserProfile(await response.json())
                }
            } catch(err) {
                console.log(err)
            }
        }

        getProfile()
    }, []);

    return(
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
        </main>
    )
};