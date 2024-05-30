export default function RegisterPage() {
    return(
        <form className="register">
            <h1>Register</h1>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button>Register</button>
        </form>
    )
}