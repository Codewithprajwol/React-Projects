import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full flex py-3 px-6 items-center justify-between bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'>
       <NavLink to={'/'} className="font-bold text-lg drop-shadow-md">React Query Todo</NavLink>
       <div className="flex items-center justify-between gap-6 font-serif text-white">
          <NavLink to={'/about'} className="hover:text-gray-200 transition">About Us</NavLink>
          <NavLink to={'/todo'} className="hover:text-gray-200 transition">Todo List History</NavLink>
       </div>
    </div>
  )
}

export default Header
