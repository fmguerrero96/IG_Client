import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

export default function Profile() {
    const [userProfile, setUserProfile] = useState({})
    const { userInfo } = useContext(UserContext);

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
        <div className="profile">
            Not implemented
        </div>
    )
};