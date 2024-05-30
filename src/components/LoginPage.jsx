export default function LoginPage() {
    return(
        <form className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button>Login</button>
        </form>
    )
}