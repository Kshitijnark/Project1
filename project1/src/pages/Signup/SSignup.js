import React,{Component,useState} from 'react'
import './SSignup.css'
import Navbar from '../../components/Navbar'
import { Form, Link ,useNavigate} from 'react-router-dom'
import logo from '../../images/logo.png'
import { Icon } from '@iconify/react'
import axios from 'axios'
export default function SSignup()  {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [institutename, setInstitutename] = useState();
  const [instituteid, setInstituteid] = useState();
  const [birthdate, setBirthdate] = useState();
  const [addrtype, setAddrType] = useState();
  const navigate=useNavigate();
  const handleSubmit=(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/ssignup',{name,email,password,birthdate,institutename,instituteid,addrtype})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    navigate('/login');
  }
    return (
    <>
    <div className='ssignupbg'>
    <Link className="home" to={"/"}  >Back to Home</Link>
        <form className='form' onSubmit={handleSubmit}>
        <img alt='text' className='logo1' src={logo} ></img>
           <p className='head'>Create your Learnspace account.</p>
           <p className='subhead'>Enter your details correctly... Your data will be safe and protected.. <a href='https://www.google.com'>Learn More</a></p>
          <p className='atr atr1'>Student Name <Icon icon="wpf:name" /></p>
          <input type='text' className='atr' placeholder='Enter your name' name='name' onChange={(e)=>setName(e.target.value)} required/>
          <p className='atr atr1'>Student Email ID <Icon icon="line-md:email-twotone" /></p>
          <input type='email' className='atr'  placeholder='Enter your email-id' name='email' onChange={(e)=>setEmail(e.target.value)} required/>
          <p className='atr atr1'>Student Birthdate <Icon icon="fontisto:date" /></p>
          <input type='date' className='atr'  placeholder='Enter your Birthdate' name='birthdate' onChange={(e)=>setBirthdate(e.target.value)} required/>
          <p className='atr atr1'>Institute Name</p>
          <input type='text' className='atr'  placeholder='Institute name' name='institutename' onChange={(e)=>setInstitutename(e.target.value)} required/>
          <p className='atr atr1'>Institute ID</p>
          <input type='text' className='atr' placeholder='Institute ID' name='instituteid' onChange={(e)=>setInstituteid(e.target.value)} required/>
           <p className='atr atr1'>Grade</p> 
           <select type="text" className='atr'
                  defaultValue='TYBtech'
                  onChange={(e)=>setAddrType(e.target.value)}>
              <option value="FYBtech">FY B.Tech</option>
              <option value="SYBtech">SY B.Tech</option>
              <option value="TYBtech">TY B.Tech</option>
              <option value="Btech">B.Tech</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
          </select>  
          <p className='atr atr1'>Password <Icon icon="teenyicons:lock-solid" /></p>
          <input type='password' className='atr' placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)} required/>
          {/* <p className='atr atr1'>Retype Password  <Icon icon="teenyicons:lock-solid" /></p>
          <input type='password' className='atr' placeholder='Retype password' required/>
        
          <input type='checkbox' className='checkbox' placeholder='Retype password'></input>
          <p className=' atr1 confirm required'>Confirm, Accept our terms and policy.</p> */}
          <button className='submit' type='submit' placeholder='Create Account'>Create Account</button>
          <input className='reset' type='reset'></input>
        </form>
    </div>
    </>
  );
}

