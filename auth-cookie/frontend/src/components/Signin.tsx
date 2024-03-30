import { useState } from "react"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    return <div>
        <input onChange={(e) => {
            setUsername(e.target.value);
        }} type="text" placeholder="username" />
        <input onChange={(e) => {
            setPassword(e.target.value);
        }} type="password" placeholder="password" />
        <button onClick={async () => {
            await axios.post(`${BACKEND_URL}/signin`, {
                username,
                password
            }, {
                withCredentials: true, 
            });
            alert("you are logged in")


            navigate("/user")
        }}>Submit</button>
    </div>
}