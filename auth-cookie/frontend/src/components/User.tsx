import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";


interface User {
    userId : string;
}

export const User = () => {
    const [userData, setUserData] = useState<User>();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/user`, {
            withCredentials: true,
          })
            .then(res => {
                setUserData(res.data);
            })
    }, []);

    return <div>
        You're id is {userData?.userId}
        <br /><br />
        <button onClick={async() => {
            await axios.post(`${BACKEND_URL}/logout`, {}, {
                withCredentials: true,
            })

            navigate("/signin")
        }}>Logout</button>
    </div>
}