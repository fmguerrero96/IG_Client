import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

export default function EditProfile() {
    const [userProfile, setUserProfile] = useState({});
    const [username, setUsername] = useState('');
    const [files, setFiles] = useState('');
    const [updated, setUpdated] = useState(false);
    const {userInfo, setUserInfo} = useContext(UserContext);

    useEffect(() => {
        const getProfile = async () => {
            try{
                const response = await fetch('http://localhost:3000/user', {
                    credentials: 'include',
                })

                if(response.ok){
                    const profile = await response.json()
                    setUserProfile(profile)
                    setUsername(profile.username)
                    setFiles(profile.profile_pic)
                }
            } catch(err) {
                console.error('Error fetching profile:', err);
            }
        }

        getProfile()
    }, []);

    const updateProfile = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.set('username', username)
        if (files) {
            data.set('file', files[0]);
        }

        const response = await fetch(`http://localhost:3000/user/update/${userProfile._id}`, {
            method: 'PUT',
            body: data,
            credentials: 'include',
        })

        if (response.ok) {
            const updatedUser = await response.json()

            // Create a new object to update the context state
            const updatedUserInfo = { ...userInfo, username: updatedUser.username }

            setUserInfo(updatedUserInfo); // Update the context state
            setUpdated(true)
        } else {
            console.error('Failed to update profile');
        }    

    };


    if(updated){
        return <Navigate to={'/homePage'}/>
    }
    return(
        <div className="edit-profile-page">
            <div className="edit-title">Edit Profile</div>
            <form onSubmit={updateProfile}>
                <div className="form_group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" 
                    name="username"
                    minLength={4}
                    required 
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                </div>

                <div className="form_group">
                    <label htmlFor="file">Profile Picture: </label>
                    <input type="file"
                    name="file"
                    id="file"
                    accept=".png, .jpg, .jpeg "
                    onChange={e => setFiles(e.target.files)} />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
};