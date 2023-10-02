import React from 'react'
import './SSignup.css'
import Navbar from '../../components/Navbar'
import { Form, Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { Icon } from '@iconify/react'
export default function FSignup() {
  return (
    <>
    <div className='ssignupbg'>
    <Link className="home" to={"/"}  >Back to Home</Link>
        
        <form className='form'>
        <img alt='text' className='logo1' src={logo} ></img>
           <p className='head'>Create your Learnspace account.</p>
           <p className='subhead'>Enter your details correctly... Your data will be safe and protected.. <a href='https://www.google.com'>Learn More</a></p>
          <p className='atr atr1'>Faculty Name <Icon icon="wpf:name" /></p>
          <input type='text' className='atr' placeholder='Enter your name' required/>
          <p className='atr atr1'>Faculty Email ID <Icon icon="line-md:email-twotone" /></p>
          <input type='email' className='atr' placeholder='Enter your email-id' required/>
          <p className='atr atr1'>Institute Name</p>
          <input type='text' className='atr' placeholder='Institute name' required/>
          <p className='atr atr1'>Institute ID</p>
          <input type='text' className='atr' placeholder='Institute ID' required/>
          <p className='atr atr1'>Department</p>
          <select className='atr' >
              <option value="FYBtech">Computer Engineering</option>
              <option value="SY">Information Technology</option>
              <option value="TY">Electronics & telecomnication</option>
              <option value="FE">Artifical Intelligence</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
          </select>
          <p className='atr atr1'>Position</p>
          <select className='atr' >
              <option value="FYBtech">Assistant Professor</option>
              <option value="SY">Professor</option>
              <option value="TY">Head of Department</option>
              <option value="FE">Associate Head</option>
              <option value="9th">Research Intern</option>
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
