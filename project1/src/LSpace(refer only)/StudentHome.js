import React from 'react';
import '../Templates/index.css';
import '../Templates/index'
import HomeNav from './HomeNav';
import HomeCard from './HomeCard';

export default function StudentHome() {
  return (
    <>
    <HomeNav/>
    <div className='homecard'>
    <HomeCard/>
    <HomeCard/>
    <HomeCard/>
    </div>
    </>
  )
}
