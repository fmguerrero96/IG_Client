import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {userInfo} = useContext(UserContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type': 'application/json'}
            })

            if(!response.ok){
                const errorData = await response.json()
                setError(errorData.error[0].msg || errorData.error);
                throw new Error(errorData.error[0].msg || errorData.error || 'Registration failed');
            }
            setSuccess('Registration successful!');
            setPassword('')
            setUsername('')
        }  catch(err) {
            console.log(err)
        } 
    }

    return(
        <main>
            <div className="registerPage">
                <form className="register" onSubmit={handleRegister}>
                    <h1>Register</h1>

                    <input type="text" 
                        placeholder="Username" required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                    <input type="password" 
                        placeholder="Password" required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    <button>Register</button>
                    {error && <div className="error">*{error}</div>}
                    {success && <div className="success">*{success}</div>}
                </form>
                <p>Already have an account? <Link to={'/login'}>Login here</Link></p>
            </div>
        </main>
    )
}