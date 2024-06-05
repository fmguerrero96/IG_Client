import { Link, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
    const {userInfo, setUserInfo} = useContext(UserContext);

    useEffect(() => {
        const getUser = async () => {
            try{
                const response = await fetch('http://localhost:3000/user', {
                credentials: 'include'
            })
            if(response.ok){
                const userData = await response.json()
                setUserInfo(userData)
            } else {
                setUserInfo(null)
            }
            }catch (err) {
                console.error('Error fetching user:', err);
                setUserInfo(null);
            }
            
        }

        getUser()
    }, []);

    if(!userInfo){
        return(
            <Navigate to={'/'}/>
        )
    }

    return(
        <header>
            <Link to={'/homePage'} className="header-logo">Fakestagram</Link>

            <nav>
                <p>Welcome: {userInfo.username}</p>
                <p>Logout</p>
            </nav>
        </header>
    )
};