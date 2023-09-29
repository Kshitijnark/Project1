import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function 
() {
  return (
    <div className='nav'>
            <img alt='text' className='logo' src={logo} ></img>
            <div className='headers'>
            <Link className="navhead" to={"/"}  >Home</Link>
            <Link className="navhead" to={"/about"}  >About</Link>
            <Link className="navhead" to={"/feature"}  >Features</Link>
            <Link className="navhead" to={"/contact"}  >Contact Us</Link>
            <Link className="navheadlogin" to={"/login"}  >Login</Link>
            <Link className="navheadsignup" to={"/signup"}  >Signup</Link>
            
            </div>
    </div>
  )
}
