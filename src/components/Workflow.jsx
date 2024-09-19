import React from 'react'
import { checklistItems } from '../constants'
import { CircleCheckBig  } from "lucide-react";
import code from '../assets/code.jpg'
function Workflow() {
  return (
    <>
    <h1 className='mt-10 text-4xl tracking-tight text-white text-center sm:text-6xl lg:text-6xl max-lg:px-5'>
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow
        </span>
    </h1>
    <div className='mt-20 px- flex flex-row max-lg:flex-col space-y-10 max-lg:items-center'>
        <div className='px-5 w-full lg:w-1/2'>
        <img src={code} alt="code" />
        </div>
        <div className='flex flex-col space-y-5 max-lg:px-5 justify-evenly' >
            {checklistItems.map((item) => (
            <div key={item.title} className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-100">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center rounded-lg ">
                <CircleCheckBig aria-hidden="true" className="h-6 w-6 text-green-800" />
                </div>
                {item.title }
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-400">{item.description}</dd>
            </div> 
            ))}
        </div>
    </div>
    </>)
}

export default Workflow