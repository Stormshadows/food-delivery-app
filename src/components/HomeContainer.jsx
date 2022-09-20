import React from 'react'
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"
import I1 from "../img/i1.png"

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
    <div className='py-2 flex-1 flex-col items-start  justify-center gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
      <p className='text-base text-orange-500 font-semibold'>Delivery</p>
      <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl '>
        <img src={Delivery} className='w-full h-full object-contain'
        alt='delivery'/>
      </div>
      </div>
      
      <p className='text-[2.5rem]  lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>Fastest delivery to you in {" "} 
      <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Minutes</span>
       </p>


       <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequuntur voluptatem recusandae, 
        eum tempore ex possimus non esse iure veniam inventore nam. Accusantium, 
        consectetur in. Doloribus amet corrupti voluptatum quo?</p>

      <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  
      rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '>
        Order now
      </button>

    </div>
    <div className='py-2 flex-1 '>
        <div className='py-2 flex-1 items-center relative'>
            <img src={HeroBg} className='ml-auto lg:h-650' alt='hero-bg'/>

            <div className='w-full h-full top-0 left-0 absolute flex items-center justify-center px-32 py-4'>
                <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center'>
                    <img src={I1} className='w40 -mt-20' alt='I1'/>
                    <p className='text-base font-semibold text-textColor'>
                        Icecream
                        </p>
                        <p className='text-sm text-lighttextGray'>Vanilla and chocolate</p>
                </div>



            </div>

        </div>
    </div>
    </section>
  );
};

export default HomeContainer