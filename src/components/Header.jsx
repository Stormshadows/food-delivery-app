import React from 'react'
import Logo from "./img/logo.png";
import {MdShoppingCart}  from "react-icons/md"

const Header = () => {
  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
    {/* desktop & tab ,for mobile its hidden , for medium its set */}

    <div className='hidden md:flex w-full h-full items-center justify-between'>  
    <div className='flex items-center gap-2'>
        <img src={Logo} className='w-8 object-cover' alt='logo'/>
        <p className='text-headingColor text-xl front-bold'>City</p>
        </div>

   <div className='flex items-center gap-8'>
   <ul className='flex items-center gap-8 '>
        <li className='text-base text-textColor hover:text-headingColor cursor-pointer'>Home</li>
        <li className='text-base text-textColor hover:text-headingColor'>Menu</li>
        <li className='text-base text-textColor hover:text-headingColor'>About Us</li>
        <li className='text-base text-textColor hover:text-headingColor'>Service</li>
    </ul>
    {/* cart */}
    <div className='relative flex items-center justify-center'>
    <MdShoppingCart className='text-textColor text-2xl cursor-pointer'/>
    <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
        <p className='text-xs text-white font-semibold'>2</p>
    </div>
    </div>
   </div>
    </div>
    {/* mobile */}
    <div className='flex md:hidden w-full h-full  '> </div>
     



    </header>
  );
};

export default Header;