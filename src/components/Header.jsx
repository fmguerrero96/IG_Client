import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <Link to={'/homePage'} className="header-logo">Fakestagram</Link>

            <nav>
                <p>Hello: 'Username'</p>
                <p>Logout</p>
            </nav>
        </header>
    )
}