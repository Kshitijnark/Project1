import React from 'react'
import Navbar from '../components/Navbar'
import './Signup.css'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (<>
  <Navbar></Navbar>
    <div className='col1'>
      <p className='colhead'>For <span style={{color:'green'}}>Students</span></p>
      <div className='line1'></div>
      <p className='colsubhead'> This is sign up for only students to access cloud based classroom with customizable self-study space with gamified UI
      </p>
      <Link className="signupbutton" to={"/ssignup"}  >Sign up</Link>
      <p className='already'>Already have a account ? <Link  to={"/login"}  >login here.</Link></p>
    </div>
    <div className='col2'>
    <p className='colhead'>For <span style={{color:'blue'}}>Faculty</span></p>
    <div className='line1'></div>
   
    <p className='colsubhead'>Sign up for only faculties to access cloud based classroom with easy and efficient monitoring of students (multiple subjects)
      </p>
      <Link className="signupbutton" to={"/fsignup"}  >Sign up</Link>
      <p className='already'>Already have a account ? <Link  to={"/flogin"}  >login here.</Link></p>
    </div>
    </>
  )
}
