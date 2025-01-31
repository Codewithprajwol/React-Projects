import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-purple-600 min-h-screen '>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App