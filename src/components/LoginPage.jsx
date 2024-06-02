import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form className="login">
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
        </form>
    )
}