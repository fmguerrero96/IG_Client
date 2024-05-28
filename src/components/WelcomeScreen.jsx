import { Link } from "react-router-dom"
import Gallery from "./Gallery"

export default function WelcomeScreen(){
    return(
        <main>
            <div className="welcome-screen">
                <Gallery/>
                <div className="welcome">
                    <h1 className="welcome-logo">
                        Fakestagram
                    </h1>
                    <div className="welcome-icon">
                        <img src="../src/assets/account_circle.png" alt="" />
                    </div>
                    <div className="welcome-links">
                        <Link className="login-link" to={'/login'}>Login</Link>
                        <div>
                            Don't have an account yet? <Link to={'/register'}>Register Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}