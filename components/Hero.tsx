import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='w-screen relative pt-[8vw]'>
      <div 
        className=' max-w-screen-xl mx-auto 
        flex flex-col gap-[10vw] px-[5vw] 
        xl:px-0 mt-[20vw] 
        sm:mt-[6vw] lg:mt-[6vw] xl:mt-0'
      >
        <div className='flex items-end justify-end'>
          <div className='w-1/2 h-[4vw]'></div>
          <div className='w-[8vw] h-[12vw] sm:w-[3vw] 
            sm:h-[2vw] flex items-center'
          >
            <Image 
              src='/iconLogo.svg' 
              width={32} height={32} 
              alt="" 
              className='w-[5vw] sm:w-[4vw] 
              lg:w-[1.8vw] xl:w-[1.5vw]'
            />
          </div>
        </div>
        <div className='lg:flex items-end justify-between'>
          <div className='text-[12vw] leading-[11vw] 
            sm:text-[12vw] sm:leading-[10vw] 
            md:text-[5vw] md:leading-[8vw]
            lg:text-[8vw] lg:leading-[7vw] 
            xl:text-[6vw] xl:leading-[5vw] uppercase 
            tracking-tighter'
          >
            <h1>We</h1>
            <h1>make</h1>
            <h1>cool</h1>
            <h1>websites</h1>
          </div>
          <div 
            className='sm:w-1/2 lg:w-1/3 
            sm:text-[2.2vw] 
            text-[4vw] mt-[8vw] 
            sm:mt-[4vw] lg:mt-0 
            lg:text-[1.2vw] 
            xl:text-[1vw]'
          >
            <p>
              Refokus is a forward-thinking web agency 
              that combines Web Design, Webflow Development, 
              and Creative Development to create cool websites 
              that help brands position themselves as market leaders.
            </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Hero
