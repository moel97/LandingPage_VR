import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import logo from '../assets/logo.png'
import {navItems} from '../constants/index.jsx'
import { IoMenuSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

   const  Icon = () => { 
    return(
        <IconContext.Provider value={{ size: "2em" }}>
        <IoMenuSharp />
        </IconContext.Provider>);
   } 

   const  CloseIcon = () => { 
    return(
        <IconContext.Provider value={{ size: "2em" }}>
        <MdClose />
        </IconContext.Provider>);
   } 
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 '>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center px-5">

                <div className="flex items-center shrink-0">

                    <img className= "h-10 w-10 mr-2 " src={logo} alt="logo" />
                    <span className="text-2xl tracking-tight">VirtualR</span>

                </div>
                
                <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
                     
                    {
                    navItems.map((item,index)=>{
                        return(
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>);
                    })
                    }
                </ul>

                <div className="flex mx-5 space-x-5 item-center justify-end max-lg:hidden">
                    <button className="bg-black border-2 border-white text-white py-2 px-2 rounded text-xs/[17px]  md:text-lg ">
                    sign in
                    </button>
                    <button className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-1 rounded text-xs/[17px]  md:text-lg ">
                    Create an account 
                    </button>
                </div>


                {/* Dropdown menu for small screens */}
                <div className="lg:hidden">
                    
                
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-black border-2 border-white text-white py-1 px-1 rounded"
                    >
                    
                    
                    {isOpen?<CloseIcon/>:<Icon/>}
                    
                    </button>
                    {isOpen && (
                    <div className="absolute bg-black z-20 w-full shadow-lg mt-2 py-2 px-2 rounded-md text-white flex flex-col justify-center justify-items-center items-center right-0">    
                    <ul >
                        {
                        navItems.map((item,index)=>{
                            
                            return(
                            <li className = "py-2" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>);
                        })
                        }
                    </ul>
                    <div className="flex mx-5 my-5 space-x-5 item-center justify-center">
                        <button className="bg-black border-2 border-white text-white py-2 px-2 rounded text-sm">
                        sign in
                        </button>
                        <button className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-1 rounded text-sm">
                        Create an account 
                        </button>
                    </div>
                    </div>
                    )}
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar