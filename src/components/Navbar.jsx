import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <header className='nav__container'>
        <ul className='nav__list'>
            <li><a href="/" className='nav__link'>Home</a></li>
            <li><a href="/owner" className='nav__link'>Owner</a></li>
        </ul>
    </header>
  )
}

export default Navbar