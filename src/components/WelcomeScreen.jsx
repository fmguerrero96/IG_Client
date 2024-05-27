import { Link } from "react-router-dom"

export default function WelcomeScreen(){
    return(
        <main>
            <div className="welcome">
                <h1 className="welcome-logo">
                    Fakestagram
                </h1>
                <div className="welcome-icon">
                    userIcon
                </div>
                <div className="welcome-links">
                    <Link to={'/login'}>Login</Link>
                    <div>
                        Don't have an account yet? <Link to={'/register'}>Register Here</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}