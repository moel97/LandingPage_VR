import React from 'react'
import {pricingOptions} from "../constants/index.jsx";
import { CircleCheckBig  } from "lucide-react";
function Pricing() {
    const SubscribeButton= ()=>{
        return(
            <button
                className=" transition duration-200 mt-10 w-full rounded-md bg-neutral px-3 py-1.5 text-sm text-white border border-gray-500 hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Subscribe
            </button>
        )
    }
  return (
    <div className="mt-40 mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className=" text-4xl tracking-wider text-white text-center sm:text-5xl lg:text-6xl">Pricing</h1>
        <div className="mt-10 flex flex-wrap justify-center">
        {
            pricingOptions.map((item)=>(
                <div key={item.title} className="flex flex-col p-5 mx-5 mt-5 justify-between rounded-md border border-gray-500 w-full sm:w-1/2 lg:w-1/4">
                    <dt className="text-base text-top text-xl font-semibold leading-7 text-gray-100 max-lg:text-3xl lg:text-2xl">
                        {item.title}
                        {item.title ==="Pro" && (<span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-sm mx-2" >  (most popular) </span>)}
                        <h2 className="text-4xl mt-5" >{item.price} <span className="text-sm text-gray-400">/month</span> </h2>

                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-400">
                    <div className="mt-5 flex flex-col justify-between item-center">
                    {item.features.map((feature,index)=>(
                        <div key={index} className="pt-5 flex space-x-5 items-center text-gray-100">
                        <CircleCheckBig aria-hidden="true" className="h-4 w-4 text-white" />    
                        <p>{feature}</p>
                    </div>
                    ))}

                
                </div>

                <SubscribeButton/>
                </dd>
                </div>
            ))
        }
            
        </div>
    </div>
  ) 
}

export default Pricing