import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    return(
        <form className="register">
            <h1>Register</h1>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button>Register</button>
        </form>
    )
}