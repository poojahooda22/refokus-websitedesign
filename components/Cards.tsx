import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full py-[4vw] sm:py-[2vw]'>
        <div className='px-[5vw] sm:px-0 max-w-screen-xl mx-auto'>
            <div className='flex flex-col-reverse 
                gap-8 sm:flex sm:flex-row sm:gap-4'
            >
                <Card width="sm:w-1/3" 
                    toptitle='Up Next: News' 
                    toptitle2='Insights and behind the scenes'
                    start={false} 
                    para={true}
                    hover={false}   
                />
                <Card 
                    width="sm:w-2/3" 
                    toptitle='Get In Touch' 
                    toptitle2="Let's get to it, together."
                    start={true}
                    para={false}
                    hover={true}              
                />
            </div>
            <div 
                className='w-full sm:flex  items-center 
                justify-between sm:mt-[2vw] mt-[6vw]'
            >
                <div 
                    className='hidden w-full sm:flex 
                    items-center gap-2 sm:text-[.8vw] 
                    text-gray3'
                >
                    <h5>Build with Nextjs, React</h5>
                    <h5>Typescript</h5>
                    <h5>GSAP, Locomotive-scroll</h5>
                    <h5>Framer-motion</h5>
                </div>
                <h4 className='sm:text-[.9vw] text-purple'>Refokus@2024</h4>
            </div>
        </div>    
    </div>
  )
}

export default Cards
