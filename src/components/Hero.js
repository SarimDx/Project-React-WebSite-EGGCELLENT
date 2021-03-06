import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="bg-white h-[calc(100vh-64px)] flex justify-center flex-col items-center">
     <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-black mb-14">
       EGGCELLENT
     </h1>
     <Link to='/' className='flex bg-yellow-500 py-6 px-10 rounded-full text-3xl 
     hover:bg-yellow-300 animate-bounce items-center transition duration-300 '>
     Order Now 
     <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
     </Link>
    </div>
  )
}

export default Hero