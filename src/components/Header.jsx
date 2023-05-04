import React from 'react'
import {useNavigate} from "react-router-dom"


const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className='grid grid-cols-2 bg-blue-600 text-white h-20 items-center shadow-gray-900'>
            <h1 onClick={()=>navigate('/')} className='max-lg:text-2xl text-4xl cursor-pointer pl-10'>DEMO Streaming</h1>
            {/* max-sm:text-xl max-md:text-2xl max-lg:text-3xl  */}
            <div className='max-sm:text-sm max-lg:flex max-lg:flex-col grid grid-cols-2 items-center'>
              <p className='text-right px-4 font-bold cursor-pointer'>Log in</p>
              <div className='text-center cursor-pointer mx-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>start your free trial</div>
            </div>
    </nav>
  )
}

export default Header