import React from 'react'
import { Link, Links } from 'react-router-dom'
const Home = () => {
  return (
    <div id='main'>
      <h1>JARURAT CARE</h1>
      <h3>Jaisi Jarurat Vaisi Care</h3>
      <div>
      <p>Providing support, guidance, hope and personalized care for cancer patients and their families. Here to ensure you never face your journey alone.</p>

      </div>
      <Link to='/Patient'>
      <button>Patient Records</button>
      </Link>
    </div>

  )
}

export default Home