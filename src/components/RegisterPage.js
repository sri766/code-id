import styled from "styled-components"
import { useState} from "react"

export default function RegisterPage(){
    
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    async function Register(e){
        e.preventDefault();
        const response = await fetch("http://localhost:4000/register",
        {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        console.log(data);
    }
    return(
        <Registerform className="register-from">
        <form action="" className="register" onSubmit={Register}>
            <h1>Register</h1>
            <input type="text" 
                placeholder="Username" 
                className="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <input type="password" 
                placeholder="Password" 
                autoComplete="password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit" className="my-button">Register</button>
        </form>
        </Registerform>
    )
}

const Registerform = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    background-color: #F0F0F0;
    height: 400px;
    width:600px;
    border-radius: 20px;
    padding: 10px auto;
    display: flex;
    postition: absolute;
`