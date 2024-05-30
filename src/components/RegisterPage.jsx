import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return(
        <form className="register">
            <h1>Register</h1>
            <input type="text" 
                placeholder="Username" required
                value={username}
                onChange={e => setUsername(e.target.value)} />
            <input type="password" 
                placeholder="Password" required
                value={password}
                onChange={e => setPassword(e.target.value, console.log(password))} />
            <button>Register</button>
        </form>
    )
}