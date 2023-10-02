import React from 'react'
import './SSignup.css'
import Navbar from '../../components/Navbar'
import { Form, Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { Icon } from '@iconify/react'
export default function SSignup() {
  return (
    <>
    <div className='ssignupbg'>
    <Link className="home" to={"/"}  >Back to Home</Link>
        
        <form className='form'>
        <img alt='text' className='logo' src={logo} ></img>
           <p className='head'>Create your Learnspace account.</p>
           <p className='subhead'>Enter your details correctly... Your data will be safe and protected.. <a href='https://www.google.com'>Learn More</a></p>
          <p className='atr atr1'>Name <Icon icon="wpf:name" /></p>
          <input type='text' className='atr' placeholder='Enter your name' required/>
          <p className='atr atr1'>Email ID <Icon icon="line-md:email-twotone" /></p>
          <input type='email' className='atr' placeholder='Enter your email-id' required/>
          <p className='atr atr1'>Birthdate <Icon icon="fontisto:date" /></p>
          <input type='date' className='atr' placeholder='Enter your Birthdate' required/>
          <p className='atr atr1'>Institute Name</p>
          <input type='text' className='atr' placeholder='Institute name' required/>
          <p className='atr atr1'>Institute ID</p>
          <input type='text' className='atr' placeholder='Institute ID' required/>
          <p className='atr atr1'>Grade</p>
          <select className='atr' >
              <option value="FYBtech">FY B.Tech</option>
              <option value="SY">SY B.Tech</option>
              <option value="TY">TY B.Tech</option>
              <option value="FE">B.Tech</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
          </select>
          <p className='atr atr1'>Password <Icon icon="teenyicons:lock-solid" /></p>
          <input type='password' className='atr' placeholder='Password' required/>
          <p className='atr atr1'>Retype Password  <Icon icon="teenyicons:lock-solid" /></p>
          <input type='password' className='atr' placeholder='Retype password' required/>
        
          <input type='checkbox' className='checkbox' placeholder='Retype password'></input>
          <p className=' atr1 confirm required'>Confirm, Accept our terms and policy.</p>
          <input className='submit' type='submit' placeholder='Create Account'></input>
          <input className='reset' type='reset'></input>
        </form>
    </div>
    </>
  )
}
