import { Link } from "react-router-dom"

export default function WelcomeScreen(){
    return(
        <main>
            <h1>
                Fakestagram
            </h1>
            <div>
                userIcon
            </div>
            <Link to={'/login'}>Login</Link>
            <div>
                Don't have an account yet? <Link to={'/register'}>Register Here</Link>
            </div>
        </main>
    )
}