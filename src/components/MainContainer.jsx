import React from 'react';
import Delivery from "../img/delivery.png"

const MainContainer = () => {
  return (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
    <div className='py-2 flex-1 flex-col items-start md:items-center justify-center gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
      <p className='text-base text-orange-500 font-semibold'>Delivery</p>
      <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl '>
        <img src={Delivery} className='w-full h-full object-contain'
        alt='delivery'/>
      </div>
      </div>
      
      <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>Fastest delivery in{" "} <span className='text-orange-600 text-[3rem]'>Minutes</span>
       </p>
       <p className='text-base text-textColor text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequuntur voluptatem recusandae, 
        eum tempore ex possimus non esse iure veniam inventore nam. Accusantium, 
        consectetur in. Doloribus amet corrupti voluptatum quo?</p>
      <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '>Order now</button>

    </div>
    <div className='py-2 flex-1 '></div>
    </div>
  );
  
};

export default MainContainer;