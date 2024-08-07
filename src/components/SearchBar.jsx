import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function SearchBar () {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        //Set redirect variable back to false after a successful search
        //to avoid unexpected behavior in app.
        if(redirect === true){
            setRedirect(false)
        }
    },[redirect]);

    const handleSearch = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:3000/username?username=${username}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (response.ok) {
                const user = await response.json();
                setUser(user)
                setRedirect(true) // Redirect to the user's profile
                setUsername('')
            } else {
                alert('User not found');
            }
        } catch (err) {
            console.error('Error searching for user:', err);
            alert('An error occurred while searching for the user');
        }
    }

    if(redirect){
        return <Navigate to={`/user/${user._id}`}/>
    }

    return(
        <form className="search-bar" onSubmit={handleSearch}>
            <input type="text" name="searchUser"
            required
            placeholder="Search for a user"
            value={username}
            onChange={e => setUsername(e.target.value)}/>
        </form>
    )
};