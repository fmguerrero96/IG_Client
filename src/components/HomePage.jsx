import { useEffect } from "react"

export default function HomePage() {

    useEffect(() => {
        async function test(){
            const data = await fetch('http://localhost:3000/protected', {
                credentials: 'include'
            })
            if (data) {
                data.json()
                console.log(data)
            }
        }
        test() 
    })
        
    return(
        <div>Hello </div>
    )
};