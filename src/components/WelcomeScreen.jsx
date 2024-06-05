import { Link, Navigate } from "react-router-dom"
import Gallery from "./Gallery"
import { UserContext } from "../UserContext";
import { useState, useContext } from "react";

export default function WelcomeScreen(){
    const {setUserInfo, userInfo} = useContext(UserContext);

    if(userInfo){
        return <Navigate to={'/homePage'}/>
    }
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