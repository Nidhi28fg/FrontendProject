"use client"
import axios from "axios";
import { useState } from "react";
import { useRouter} from "next/navigation"

export default function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    return (
        <div> 
            <h1>Signin Page</h1>
            
                <input type="text" placeholder="Enter your Name" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <button  onClick={()=> {
                    console.log(username, password)
                    axios.post('http://localhost:3000/api/v1/signin', {
                        username,
                    password })
                    router.push('/')
                }}>Signin</button>
        </div>
    )
}

// password and username show in payload