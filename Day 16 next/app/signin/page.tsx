"use client"
import axios from "axios";
import { useState } from "react";

export default function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div> 
            <h1>Signin Page</h1>
            <form>
                <input type="text" placeholder="Enter your Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={()=> {
                    axios.post('https://localhost:3000/api/v1/signin', {
                        username,
                    password })
                }}>Signin</button>
            </form>
        </div>
    )
}