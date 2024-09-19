import React from 'react'
import Video1 from '../assets/video1.mp4'
import Video2 from '../assets/video2.mp4'
function HeroSect() {
  return (
    <>
    <div className="flex flex-col justify-center text-center gap-y-5 ">
            <h1 className="text-4xl tracking-normal text-white px-4 sm:text-6xl lg:text-7xl">
                VirtualR build tools 
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                {" "} 
                for developers</span> 
            </h1>
            <p className="mx-5 mt-6 text-lg leading-8 text-white-600">
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your imagination
            into immersive reality!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 justify-self-center">
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start for free <span aria-hidden="true">→</span>
              </a>
              <a href="#" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm border-2 border-white">
                Documentation 
              </a>
            </div>
            <div className="mt-20 mx-10 flex justify-center gap-x-10 item-center max-sm:flex-col justify-items-center ">
                <video loop muted autoPlay className="rounded-lg mx-2 my-4 border border-orange-700 shadow-md shadow-orange-400 w-1/2 max-sm:w-full" >
                    <source src={Video1} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
                <video loop muted autoPlay className="rounded-lg mx-2 my-4 border border-orange-700 shadow-md shadow-orange-400 w-1/2 max-sm:w-full" >
                    <source src={Video2} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
            </div>
          </div>
    </>
  )
}

export default HeroSect