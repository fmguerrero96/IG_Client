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

    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
};