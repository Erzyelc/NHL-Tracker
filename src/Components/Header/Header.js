import React from 'react'
import './Header.css'
import shieldlogo from '../../assets/XtZzlMJ_sAlbosD00uCL6dvQpTgjO-qBa_IcgdY31Og 1.svg'
import { AiFillHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'

function Header() {
  return (
    <div className="header-container">
        <img src={shieldlogo} className="logo" alt="shield logo"/>
        <h1>NHL TRACKER</h1>

        <nav>
        <AiFillHeart className="heart"/>
        <CgProfile className="profile-icon"/>
        </nav>
    </div>
  )
}

export default Header