import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const getUser = async () => {
            try{
                const response = await fetch('http://localhost:3000/user', {
                credentials: 'include'
            })
            if(response.ok){
                const userData = await response.json()
                setUserInfo(userData)
            } else {
                setUserInfo(null)
            }
            }catch (err) {
                console.error('Error fetching user:', err);
                setUserInfo(null);
            }
            
        }

        getUser()
    }, []);

    async function logout() {
        try{
            const response = await fetch('http://localhost:3000/logout', {
                method: 'POST',
                credentials: 'include',
            })
            if(response.ok){
                setUserInfo(null)
            }
        } catch(err) {
            console.error('Error logging out:', err);
        }
        
    }

    return(
        <UserContext.Provider value={{userInfo, setUserInfo, logout}}>
            {children}
        </UserContext.Provider>
    )
};