import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../constants'
function Footer() {

    const Footercol = (probs) =>(
        <div className="mt-10 flex flex-col items-start ">
            {probs.links.map((prob)=>(
                <a className='mt-5' key={prob.text} href={prob.href}>{prob.text}</a>
            ))}    
        </div>
    )

  return (
    <div className='max-w-7xl mx-auto pb-10'>
    <div className='mx-5 lg:mt-40 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 border-t border-gray-200'>
        <div>
            <p className='text-start text-xl text-orange-500'>resources</p>
            <Footercol links={resourcesLinks} />
        </div>
        <div>
            <p className='text-start  text-xl text-orange-500'>platform</p>
            <Footercol links={platformLinks} />
        </div>
        <div>
            <p className='text-start  text-xl text-orange-500'>community</p>
            <Footercol links={communityLinks} />
        </div>
    </div>
    </div>
  )
}

export default Footer