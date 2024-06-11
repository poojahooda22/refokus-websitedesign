import Image from 'next/image'
import React, { useRef } from 'react'
import Button from './button/Button'
import { useScroll, useTransform , motion} from 'framer-motion';

function Project({val}: {val: any}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress} = useScroll ({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
  return (
    <motion.div
        ref={ref}
        style={{
            scale: scaleProgress,
            // opacity: opacityProgress,
            backgroundColor: val.bg
        }} 
        className={`w-full sm:py-[2vw] py-[4vw] 
            px-[4vw] sm:px-[2vw] 
            rounded-2xl flex gap-[1vw]`
        }
    >
        <div className='sm:w-1/2 flex flex-col items-start gap-[1.5vw] '>
            <h2 className=''>
                <Image src={val.logo}
                    alt="" width={32} height={32}
                    className='hidden sm:block sm:w-[8vw]'    
                />
            </h2>
            <div className='w-full hidden sm:flex justify-end'>
                <div className='pt-[1vw]'>
                    <Image src={val.image1} alt="" 
                    width={1000} height={100}
                    className='w-[16vw] rounded-2xl' />
                </div>    
            </div> 
            <Image src={val.image2} alt="" 
            width={1000} height={32}
            className='w-[38vw] hidden sm:block rounded-2xl' />
        </div>
        <div className='w-full sm:w-1/2'>
            <h2 className=''>
                <Image src={val.logo}
                    alt="" width={32} height={32}
                    className=' sm:hidden w-[32vw] py-[4vw] mb-[3vw]'    
                />
            </h2>
            <div className='bg-secondary w-full h-[60vw] sm:h-[26vw] rounded-2xl overflow-hidden'>
                <video src={val.videoUrl}
                    autoPlay
                    muted
                    loop
                    className='w-[100%] h-[100%] object-cover'
                />
            </div>
            <div className='mt-[6vw] sm:mt-[2vw] pl-[1vw]'>
                <p className='text-[3vw] sm:text-[.8vw] mb-[2vw] sm:mb-[.7vw] tracking-tight'>{val.desc}</p>
                <h3 className='text-[4vw] leading-[5vw] sm:text-[1.1vw] sm:leading-[1.4vw] mb-[8vw] sm:mb-[2vw] tracking-tight'>{val.heading}</h3>
                <Button text='View Website' bg='bg-secondary' txt='text-primary'  />
            </div>
        </div>

    </motion.div>
  )
}

export default Project
