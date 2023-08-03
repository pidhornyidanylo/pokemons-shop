import React from 'react'
import { Outlet } from 'react-router-dom'

import './home.style.css'

const Home = () => {
  return (
    <div className='home-bg'>
        <Outlet />
    </div>
  )
}

export default Home
