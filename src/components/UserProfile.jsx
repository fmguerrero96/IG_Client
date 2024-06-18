import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}`, {
                    credentials: 'include',
                });

                if (response.ok) {
                    const profile = await response.json();
                    setUserProfile(profile);
                } else {
                    console.error('User profile not found');
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [id]);

    if (!userProfile) {
        return <div className="user-profile">Loading...</div>;
    }

    return (
        <div className="user-profile">
            <h1>{userProfile.username}</h1>
            {/* Render other user profile details. To be implemented. */}
        </div>
    );
};