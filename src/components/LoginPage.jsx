import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
         e.preventDefault();

         try{
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type': 'application/json'}
            })

            if(response !== 200){
                const errorData = await response.json()
                console.log(errorData.error)
                setError(errorData)
            }
         } catch(err) {

         }
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
            {error && <div>{error.error}</div>}
        </form>
    )
}