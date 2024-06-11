import React from 'react'
import Project from './Project'
import Button from './button/Button'

function Projects() {
    const data =[
        {
            image1: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp',
            image2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp',
            logo: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg',
            videoUrl: 'https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm',
            desc: 'Concept, Design, 3D, Webflow+WebGL Development',
            bg: '#5355ee',
            heading: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate."
        },
        {
            image1: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png',
            image2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png',
            logo: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b4127d91ec4fa9b1124008_Logo%20White%202.svg',
            videoUrl: 'https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4',
            bg: '#4a576b',
            desc: 'Concept, Design, 3D, Webflow+WebGL Development',
            heading: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates."
        },
        {
            image1: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg',
            image2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg',
            logo: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/660191edcdb42d79ba8c23aa_Logo.svg',
            videoUrl: 'https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm',
            bg: '#3e4365',
            desc: 'Concept, Design, 3D, Webflow+WebGL Development, AI Integrations',
            heading: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design."
        },

    ]
  return (
    <div className='w-full py-[4vw]'>
        <div className='max-w-screen-xl mx-auto px-[5vw] sm:px-0'>
            <div className='flex flex-col gap-[8vw] sm:gap-[2vw]'>
                {data.map((elem, index) => (
                    <Project key={index} val={elem} />
                ))}
            </div>
            <div className='mt-[4vw] flex items-center justify-center'>
                <button 
                    className='text-[3vw] sm:text-[.8vw]
                    py-[3vw] px-[5vw] sm:px-[1.3vw] mt-[4vw]
                    sm:py-[.5vw] rounded-full sm:mt-[1vw] 
                    border-[1px] border-secondary'
                >
                    View more projects
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Projects
