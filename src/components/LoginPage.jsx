import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button>Login</button>
        </form>
    )
}