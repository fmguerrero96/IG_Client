import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import SearchBar from "./SearchBar";

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
                <div>
                    <p>Welcome: {userInfo.username}</p>
                    <p className="logout" onClick={logout}>Logout</p>
                </div>
                <SearchBar/>
            </nav>
            
        </header>
    )
};