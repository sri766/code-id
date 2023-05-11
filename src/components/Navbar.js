import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <Nav>
        <Link to="/"><img alt="logo"src="/images/CodeId.png" className='LOGO'></img></Link>
        <span className="line"></span>
        <Search><img src="/images/search.png" alt="" className="search" /></Search>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Nav>
    
  )
}

export default Navbar


const Nav = styled.div`
  background-color: rgb(0, 0, 0);
  height: 60px;
  width: 100%;
  display: flex;
  postion: absolute;
  flex: 1;

  
`

const Search = styled.div`
  background-color: rgb(255, 255, 255,0.4);
  border: 2px solid rgb(255, 255, 255,0.9);
  height: 30px;
  width: 300px;
  display: flex;
  margin-top: 15px;
  postion: absolute;
  margin-left: 700px;
  border-radius: 50px;

  img{
    height: 20px;
    width: 20px;
    margin-top: 5px;
    position: relative;
    margin-left: 15px;
    margin-top: 5px;
  }

`