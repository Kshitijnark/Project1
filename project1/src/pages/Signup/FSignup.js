import React,{useState} from 'react'
import './SSignup.css'
import Navbar from '../../components/Navbar'
import { Form, Link ,useNavigate} from 'react-router-dom'
import logo from '../../images/logo.png'
import { Icon } from '@iconify/react'
import axios from 'axios'
export default function FSignup() {
  const [fname, setfName] = useState();
  const [femail, setfEmail] = useState();
  const [fpassword, setfPassword] = useState();
  const [finstitutename, setfInstitutename] = useState();
  const [finstituteid, setfInstituteid] = useState();
  const [fdepartment, setfdepartment] = useState();
  const [fposition, setfPosition] = useState();
  const navigate=useNavigate();
  const fhandleSubmit=(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/fsignup',{fname,femail,fpassword,finstitutename,finstituteid,fdepartment,fposition})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    navigate('/login');
  }
  return (
    <>
    <div className='ssignupbg'>
    <Link className="home" to={"/"}  >Back to Home</Link>
        
        <form className='form' onSubmit={fhandleSubmit}>
        <img alt='text' className='logo1' src={logo} ></img>
           <p className='head'>Create your Learnspace account.</p>
           <p className='subhead'>Enter your details correctly... Your data will be safe and protected.. <a href='https://www.google.com'>Learn More</a></p>
          <p className='atr atr1'>Faculty Name <Icon icon="wpf:name" /></p>
          <input type='text' className='atr' placeholder='Enter your name' name='fname' onChange={(e)=>setfName(e.target.value)} required/>
          <p className='atr atr1'>Faculty Email ID <Icon icon="line-md:email-twotone" /></p>
          <input type='email' className='atr' placeholder='Enter your email-id' name='femail' onChange={(e)=>setfEmail(e.target.value)} required/>
          <p className='atr atr1'>Institute Name</p>
          <input type='text' className='atr' placeholder='Institute name' name='finstitutename' onChange={(e)=>setfInstitutename(e.target.value)} required/>
          <p className='atr atr1'>Institute ID</p>
          <input type='text' className='atr' placeholder='Institute ID' name='finstituteid' onChange={(e)=>setfInstituteid(e.target.value)} required/>
          <p className='atr atr1'>Department</p>
          <select className='atr' 
          type="text" 
          defaultValue="CSE"
          onChange={(e)=>setfdepartment(e.target.value)}>
              <option value="CSE">Computer Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ENTC">Electronics & telecomnication</option>
              <option value="AI">Artifical Intelligence</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
          </select>
          <p className='atr atr1'>Position</p>
          <select className='atr'
          type="text" 
          defaultValue="Assistant Professor"
          onChange={(e)=>setfPosition(e.target.value)} >
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Professor">Professor</option>
              <option value="Head of Department">Head of Department</option>
              <option value="Associate Head">Associate Head</option>
              <option value="Research Intern">Research Intern</option>
          </select>
          <p className='atr atr1'>Password <Icon icon="teenyicons:lock-solid" /></p>
          <input type='password' className='atr' placeholder='Password' name='fpassword' onChange={(e)=>setfPassword(e.target.value)}  required/>
          {/* <p className='atr atr1'>Retype Password  <Icon icon="teenyicons:lock-solid" /></p>
          <input type='password' className='atr' placeholder='Retype password' required/> */}
        
          {/* <input type='checkbox' className='checkbox' placeholder='Retype password' ></input> */}
          <p className=' atr1 confirm required'>Confirm, Accept our terms and policy.</p>
          <button className='submit' type='submit' placeholder='Create Account'>Create Account</button>
          <input className='reset' type='reset'></input>
        </form>
    </div>
    </>
  )
}
