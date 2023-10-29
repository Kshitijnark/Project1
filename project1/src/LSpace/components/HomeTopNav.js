import React from 'react'
import { Icon } from '@iconify/react';
import logo from '../../images/logo.png'
import './HomeTopNav.css'
export default function HomeTopNav() {
  return (
    <div className='navhome'>
        <div className='ham-nav'>
             <Icon icon="ci:hamburger-lg" width="30" />
        </div>
        <div className='logo-position-home'>
             <img alt='text' className='logohome' src={logo} ></img>
        </div>
        <div className='input-search'>
            <input type='text' className='searchbar' placeholder='Computer Networking ....'/>
            <button type="submit" className='magnify'><i class="fa fa-search"></i></button>
        </div>
        <div className='bell-icon'>
            <Icon icon="mdi:bell" width="30" />
        </div>
        <div className='dots-icon'>
             <Icon icon="mdi:dots-grid" width="30" />
        </div>
        <div className='profile-photo'>
            <Icon icon="healthicons:ui-user-profile" width="36" />
        </div>
    </div>
  )
}
