import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
    const {userInfo, logout} = useContext(UserContext);


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
                <p onClick={logout}>Logout</p>
            </nav>
        </header>
    )
};