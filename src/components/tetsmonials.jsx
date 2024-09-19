import React from 'react'
import { testimonials } from '../constants'

function Tetsmonials() {
  return (
    <div className='mt-40 flex flex-col justify-center items-center lg:mx-10'>
        <h1 className=" text-4xl tracking-normal text-center text-white px-4 sm:text-6xl lg:text-7xl"> what people are saying </h1>
    
        <div className="mx-5 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 max-lg: lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
                <article key={testimonial.user} className="flex max-w-xl flex-col items-start justify-between bg-black rounded-lg p-5">
                <div className="flex items-center gap-x-4 text-xs">
                    <p className="mt-5  text-sm leading-6 text-gray-300">{testimonial.text}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="user" src={testimonial.image} className="h-10 w-10 rounded-full bg-gray-50 border border-gray-300 " />
                    <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-300">
                        {testimonial.user}
                    </p>
                    <p className="text-gray-500">{testimonial.company}</p>
                    </div>
                </div>
                </article>
            ))}
            </div>
    </div>
  )
}

export default Tetsmonials