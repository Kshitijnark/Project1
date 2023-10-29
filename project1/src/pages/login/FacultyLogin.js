import React from 'react'
import '../../Login_v1/css/main.css'
import '../../Login_v1/css/util.css'
import Navbar from "../../components/Navbar"
// import '../../Login_v1/vendor/bootstrap/css/bootstrap.min.css'
import '../../Login_v1/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../Login_v1/vendor/animate/animate.css'
import '../../Login_v1/vendor/select2/select2.min.css'
// import '../../Login_v1/vendor/css-hamburgers/hamburgers.min.css'
import { Link } from 'react-router-dom'

export default function FacultyLogin() {
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
        <form className="login100-form validate-form">
          <span className="login100-form-title">Faculty Login</span>
          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="Email"
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
            />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn ">Login</button>
          </div>
          <Link className="txt2 posfac" to={"/login"}  >I am Student ?</Link>
            
            <Link className="txt2 posfac2" to={"/fsignup"}  >Create your Account<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" /></Link>
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
