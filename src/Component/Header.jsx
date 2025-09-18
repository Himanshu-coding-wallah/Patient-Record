import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div id='header'>
      <Link to='/'>
      <h1>Jarurat Care</h1>
      </Link>
      <nav id='links'>
        <Link to='/'>Home</Link>
        <Link to='/Patient'>Patient</Link>
        <Link to='/About'>About</Link>
      </nav>

    </div>
  )
}

export default Header