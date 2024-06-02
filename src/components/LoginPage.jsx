import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [redirect, setRedirect] = useState(false)

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
                setRedirect(true)
            }
            const errorData = await response.json()
            setError(errorData.error)
            
         } catch(err) {
            setError(err.error)
            console.log(error)
         }
    }

    if(redirect){
        return <Navigate to={'/homePage'}/>
    }

    return(
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
            {error && <div>{error}</div>}
        </form>
    )
}