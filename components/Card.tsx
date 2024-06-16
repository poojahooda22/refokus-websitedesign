import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function Card({width, toptitle, toptitle2, start, para, hover="false"}: 
    {
        width: string, 
        toptitle: string, 
        toptitle2?: string, 
        start?: boolean, 
        para?: boolean, 
        hover?: boolean
    }
    ) {
  return (
    <motion.div 
        whileHover={{ backgroundColor: hover === true && '#7443ff', padding: '28px'}}
        className={`${width} min-h-[80vw] sm:min-h-[24vw] 
        bg-gray rounded-lg sm:rounded-3xl
        py-[4vw] px-[4vw]
        sm:py-[1vw] sm:px-[1vw]
        flex flex-col justify-between`}
    >
        <div className='w-full'>
            <div className='flex items-center justify-between mb-[1vw]'>
                <p className='text-[3vw] sm:text-[.7vw]'>
                    {toptitle}
                </p>
                <Image src='/arrow.svg' 
                    width={20} 
                    height={20} 
                    alt="" 
                    className='w-[4vw] sm:w-[1vw]' 
                />
            </div>
            <div className='w-1/2 pt-[2vw] sm:pt-0'>
                <h3 className='text-[4.6vw] font-regular sm:text-[1.2vw] '>{toptitle2}</h3>
            </div>    
        </div> 

        <div className='down w-full'>
            {
                start &&  
                <>
                    <h1 
                        className='text-[12vw] sm:text-[5vw] 
                        font-medium leading-none'
                    >
                        Start a Project 
                    </h1>
                    <Link href="/contact">
                        <button 
                            className='text-[3vw] sm:text-[.8vw]
                            py-[3vw] px-[5vw] sm:px-[1.3vw] mt-[4vw]
                            sm:py-[.5vw] rounded-full sm:mt-[1vw] 
                            border-[1px] border-secondary'
                        >
                            Contact us
                        </button>
                    </Link>
                </>               
                
            }
            {
                para &&  
                <p className='text-[3vw] sm:text-[.7vw] text-gray3'>
                    Explore what drives our team.
                </p>      
            }        
        </div>
    </motion.div>
  )
}

export default Card
