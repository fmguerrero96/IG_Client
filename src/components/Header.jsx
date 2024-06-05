import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
    const {userInfo} = useContext(UserContext);
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