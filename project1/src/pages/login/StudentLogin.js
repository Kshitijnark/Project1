import React,{useState} from 'react'
import '../../Login_v1/css/main.css'
import '../../Login_v1/css/util.css'
import Navbar from "../../components/Navbar"
// import '../../Login_v1/vendor/bootstrap/css/bootstrap.min.css'
import '../../Login_v1/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../Login_v1/vendor/animate/animate.css'
import '../../Login_v1/vendor/select2/select2.min.css'
// import '../../Login_v1/vendor/css-hamburgers/hamburgers.min.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import StudentHome from '../../LSpace/StudentHome'
import Dash from '../../LSpace/Dash'


export default function StudentLogin({ setIsLoggedIn }) {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
  const [loggedIn,setLoggedIn]=useState(false);
  const handleSubmit=(e) =>{
    e.preventDefault();
    const response= axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{
      console.log(result)
      if(response.data==="Success")
      {
        localStorage.setItem('loggedInUser', JSON.stringify({email,password}));
      setLoggedIn(true); // Set the login state to true
      console.log('Login successful!');}

    })
    .catch(err=>console.log(err))
    
    // navigate('/studenthome');
    if(loggedIn===true){
      <Navigate to={Dash}/>
    }
    
  }
  return (
    <>
    <>
    <Navbar/>


  {/*===============================================================================================*/}
 
  {/*===============================================================================================*/}
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt="">
          <img src={require("../../Login_v1/images/img-01.png")} alt="IMG" />
        </div>
        <form className="login100-form validate-form" onSubmit={handleSubmit}>
          <span className="login100-form-title">Student Login</span>
          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn " type='submit' name='submit'>Login</button>
          </div>
            <Link className="txt2 posfac" to={"/flogin"}  >I am Faculty ?</Link>
            
            <Link className="txt2 posfac2" to={"/ssignup"}  >Create your Account<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" /></Link>
          <div className="text-center p-t-80">
           
          </div>
        </form>
      </div>
    </div>
  </div>
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
</>
</>
  )
}
