import { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo, userInfo} = useContext(UserContext);

    const handleLogin = async (e) => {
         e.preventDefault();
         setError('')

         try{
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type': 'application/json'},
                credentials: 'include', //include cookies in request
            })

            if(response.status === 200){
                setUserInfo(await response.json())
                setRedirect(true)
            }
            const errorData = await response.json()
            setError(errorData.error)
            
         } catch(err) {
            setError(err.error)
            console.log(error)
         }
    }
    if(userInfo){
        return <Navigate  to={'/homePage'}/>
    }

    if(redirect){
        return <Navigate to={'/homePage'}/>
    }

    return(
        <main>
            <div className="loginPage">
                <form className="login" onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input type="text" placeholder="Username" 
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <input type="password" placeholder="Password" 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <button>Login</button>
                    {error && <div className="error">{error}</div>}
                </form>
                <p>Don't have an account? <Link to={'/register'}>Register Here</Link></p>
            </div>
        </main>
    )
}