import React from 'react'
import { Link } from 'react-router-dom'
function Drobdown({isOpen, toggle}) {
  return (
    <div className={isOpen ? 'grid grid-rows-4 place-items-center md:hidden bg-yellow-500 transition duration-500 ' : 'hidden'} onClick={toggle}>
        <Link className='p-4' to='/'>Home</Link>
        <Link className='p-4' to='/menu'>Menu</Link>
        <Link className='p-4' to='/content'>Content</Link>
        <Link className='p-4' to='/about'>About</Link>
    </div>
  )
}

export default Drobdown