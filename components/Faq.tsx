'use client'

import React, { useState } from 'react'

function Faq() {

    const data =[
        {
            title: 'What type of clients do you work with?',
            desc: "We work with a range from startups to Fortune 500 companies, including some cool niches like Venture Capital firms. Sometimes we work with founders, and other times with marketing managers, but what’s most important is that our clients are ready to break the mold and refocus their brand and website with unique experiences."   
        },
        {
            title: "What's your pricing looking like?",
            desc: 'Our pricing typically ranges from $25k to $150k, though most of our projects are around $50k. We like to work smart with budgets and strategize around your needs. For example, if you have a few pages but not a big budget, we could do something really cool for the homepage and opt for CMS templates or a component-driven approach for internal pages. But if you give us a huge budget, we can go crazy, add 3D animations, and all the good stuff.'
        },
        {
            title: "How much time do you need for websites?",
            desc: "Typically, it’s between 8 to 12 weeks, but we also have huge 6-month projects for large enterprise clients and created campaign pages in 4 weeks."
        }
    ]
    const [expand, setExpand] = useState(false);

    const toogleExpand = () => setExpand((prevExpand) => !prevExpand);
    

  return (
    <div className=''>
        {data.map((item, index) => (
            <div key={index}
                onClick={toogleExpand} 
                className='w-full cursor-pointer sm:py-[1vw] py-[4vw]
                font-regular border-b-[1px] border-gray2'
            >
                <div className='flex items-center justify-between'>
                    <h4 className='text-[3.5vw] sm:text-[.9vw]'>{item.title}</h4>
                    <span className='text-[6vw] sm:text-[2vw] text-gray2'>
                        {expand ? '-' : '+'}
                    </span>
                </div>            
                { expand && <div className='text-[3vw] sm:text-[.8vw] font-normal'>
                {item.desc}</div>}    
            </div>
        ))} 
    </div>
  )
}

export default Faq
