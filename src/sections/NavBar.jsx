import { motion } from "motion/react"
import React, { useState } from 'react'
import "../css/NavBar.css"
import menu from "../images/hamburger.png"
import cross from "../images/cross.png"
import Hero from "./Hero"

const NavBar = () => {

    const [isOpen, setisOpen] = useState(false)
    

    return (
        <div className="background-image bg-fixed">


            {/*Nav Section*/}
            <div className="bg-white shadow-2xl py-4 fixed w-full z-20">
                <nav className="flex justify-between items-center w-[92%] mx-auto text-xl">
                    <div>
                        <a href="#home">Shaun</a>
                    </div>
                    
                    <div className="sm:static sm:min-h-fit sm:w-auto bg-white">
                        <ul className="sm:flex sm:flex-row sm:items-center sm:gap-[4vw] hidden">
                            <li>
                                <a href="#home" className="hover:text-gray-500">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-gray-500">About</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-gray-500">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-gray-500">Projects</a>
                            </li>
                        </ul>
                    </div>


                    {isOpen&&(
                    <div className="absolute backdrop-blur-md min-h-[45vh] right-0 top-0 w-[50%] h-[100vh] flex items-start px-8 sm:hidden">
                        <ul className="flex flex-col gap-8 sm:hidden pt-4 text-black">
                            <img src={cross} onClick={(e) => setisOpen(false)} className="w-7 cursor-pointer"></img>
                            <li>
                                <a href="#home" className="hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white">About</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-white">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-white">Projects</a>
                            </li>
                        </ul>
                    </div>)}
                    
                    <div>
                        <img src= {menu} onClick={(e) => setisOpen(true)} className="h-7 cursor-pointer sm:hidden"></img>
                    </div>
                </nav>
            </div>

            {/*Hero Section*/}
            <Hero></Hero>



        </div>
    )
}

export default NavBar







