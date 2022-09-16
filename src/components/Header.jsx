import React from 'react'
import Logo from "./img/logo.png";

const Header = () => {
  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
    {/* desktop & tab ,for mobile its hidden , for medium its set */}

    <div className='hidden md:flex w-full h-full '> </div>  
    <div className='flex items-center gap-2'>
        <img src={Logo} className='w-8 object-cover' alt='logo'/>
        <p className='text-headingColor text-xl front-bold'>City</p>




    </div>

    <ul className='flex items-center gap-8'>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Service</li>
    </ul>
    {/* mobile */}
    <div className='flex md:hidden w-full h-full  '> </div>  



    </header>
  )
}

export default Header