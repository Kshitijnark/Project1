import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
  const handleSubmit=(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
    if(result.data==="Success"){
      navigate('/about')
    }})
    // navigate('/')
    .catch(err=>console.log(err))
  }
  return (
    <div >
      <Navbar></Navbar>
    <form className='demopos' onClick={handleSubmit}>
          <p>Enter Email ID: </p>
          <input type='email' placeholder='email' name='email' onChange={(e)=>setEmail(e.target.value)}></input>
          <p>Enter Password</p>
          <input type='password' placeholder='pass' name='password' onChange={(e)=>setPassword(e.target.value)}></input>
          <button type='submit' onSubmit={handleSubmit}></button>
    </form></div>
  )
}
