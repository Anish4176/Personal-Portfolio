import React from 'react'
import programmer from '../assets/programmer.png'
function Mainsection() {
    return (

        <div id='home' className="bg-hero-pattern  bg-no-repeat bg-cover bg-left pt-[12rem] md:pt-1  flex-row lg:flex justify-center items-center min-h-screen xl:justify-start">
          <div className='flex justify-center lg:justify-end pt-2 md:pt-[6rem] lg:pt-2 pb-5'>  <img src={programmer} className=" h-auto rounded-full md:mx-[2rem] lg:w-[70%]  w-[60%] text-center" alt="" /></div>
            <div className="flex-row  text-white lg:ml-[9rem] block  ml-[2rem]   space-y-2  items-start w-full justify-center    ">

                <h2 className='text-3xl xl:text-5xl md:text-4xl font-bold pr-2 font-roboto'>Hello, my name is</h2>
                <h1 className='text-5xl xl:text-8xl md:text-6xl font-bold font-sans'><span className='text-red-600'>A</span>nish <span className='text-red-600'>S</span>ingh</h1>
                <div className="wrapper "> 
                    <div className="static-text text-[1.8rem] sm:text-[2rem] ">I'm a </div>
                    <ul className="dynamic-text text-left text-[1.5rem] sm:text-[2rem]  ">
                        <li><span>Frontend Developer</span></li>
                        <li><span>Web Programmer</span></li>
                        <li><span>Backend Developer</span></li>
                    </ul>
                </div>

                {/* buttons */}
                <div className="container space-x-4 my-5 py-2    ">
                    <a href='https://github.com/Anish4176' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4  rounded">
                        <i className="m-1 fa-brands fa-github" ></i>
                        Github</a>
                    <a href='https://www.linkedin.com/in/anish-webdev/' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4  rounded"><i className="m-1 fa-brands fa-linkedin"></i>Linkedin</a>
                </div>
            </div>

        </div>
    )
}

export default Mainsection