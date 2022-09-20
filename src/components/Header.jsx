import React from 'react'
import {MdShoppingCart}  from "react-icons/md"
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {app} from '../firebase.config';
import avatar from "../img/avatar.png"
import Logo from "../img/logo.png";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';



const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue()

  const login = async () => {
   if(!user){
    const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth,provider);
    dispatch({
      type : actionType.SET_USER,
      user : providerData[0],
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]));
   }
  };

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
   <div className='relative'>
   <motion.img whileTap={{scale : 0.6}} 
    src={user ? user.photoURL:avatar} 
    className = 'w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
    alt='userprofile'
    onClick={login}/>
    <div className='w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute'>
        <p>New Item</p>
    </div>
   </div>
   </div>
    </div>
    {/* mobile */}
    <div className='flex md:hidden w-full h-full'> </div>
     



    </header>
  );
};

export default Header;