import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="header">
      <div className='container'>
        <div className='header-links'>
           <img alt='logo'></img>
           <div className='link_container'>
           <Link className="link_styles" to="/Home">Home</Link>
           <Link className="link_styles" to="/About">About</Link>
           <Link className="link_styles" to="/Contact">Contact</Link> 
           </div>
           <img alt="logout"></img>
        </div>
          </div>
    </div>
  )
}
