import styled from "styled-components"
export default function Login(){
    return(
        <Loginform>
            <form action="" className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username" className="username"/>
                <input type="password" placeholder="Password" className="password"/>
                <button type="submit" className="my-button">Login</button>
            </form>
        </Loginform>
    )
}

const Loginform = styled.div`
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