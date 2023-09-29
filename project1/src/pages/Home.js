import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.png'
import './Home.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <img className='img123' src={img3}></img>
        <div className='text1'>
            <p className='slogan'><span className='Learning'>Learning, Teaching    ,</span> multiple subjects is now more easier</p>
            <div className='line'></div>
            <p className='subtext'>Learnspace is all-in-one cloud based customised Classroom Management based on spaced-repetition with self study corner.</p>
            <Link className="Homelogin" to={"/login"}  ><Icon icon="material-symbols:login" width="26" />Login</Link>
            <p className='subtext1'><Icon icon="carbon:play-filled" color="#ebae3d" width="24" /> Watch how it works</p>
        </div>
        <div className='Homepart2'>
          <p className='Allinone'><span style={{color:'blue'}}>All - in - one </span> &nbsp;Cloud Classroom</p>
          <div className='line1'></div>
          <p className='allinonetext'>Learnspace is powerful classroom platform ,where self study is more easier and trackable based on concept of spaced repetition in self-space. Effective Monitoring student is more easier.</p>
        </div>
        <div className='Homecards'>
              <div className='card'>
                <Icon className="cardicon"icon="healthicons:i-exam-qualification" color="#ebae3d" width="50" />
                <p className='cardhead'>Custom Self-Study Space</p>
                <p className='cardtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
              </div>
              <div className='card'>
              <Icon className='cardicon' icon="bi:ui-checks" color="#ebae3d" width="50" />
              <p className='cardhead'>Scientific Solution : Evidence Based Education</p>
              <p className='cardtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
              </div>
              <div className='card'> 
              <Icon className='cardicon' icon="medical-icon:health-education" color="#ebae3d" width="50" />
              <p className='cardhead'>Self-tests, Dashboard, User-friendly UI</p>
              <p className='cardtext'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
            </div>
        </div>
        <div className='Homepart3'>
          <p className='home3head'>What is <span style={{color:'blue'}}>Learnspace... ?</span></p>
          <div className='line2'></div>
          <p className='home3text'>Learnspace is powerful classroom platform ,where self study is more easier and trackable based on concept of spaced repetition in self-space. Effective Monitoring student is more easier.</p>
        </div>
        <div className='bottom'></div>
        <img className='bottomimg' src={img1}></img>
        <p className='bottomtext'><span style={{color:'blue'}}>Learnspace</span> is key to Success.....</p>
        <p className='bottomtext'><span style={{color:'blue'}}>You</span> can do anything .....</p>
    </div>
    
  )
}
