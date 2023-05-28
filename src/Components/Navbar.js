import React from 'react'
import myimg from '../assets/myimg.png'
function Navbar() {
    return (
        <>
            <div className="main z-20 bg-bluish text-white md:flex md:justify-between md:items-center top-0 fixed w-full ">
                <div className=" mx-1 flex items-center h-20">

                    <img src={myimg} className="h-16 rounded-full p-1 w-16" alt="" />
                    <a className="  font-bold  text-3xl font-roboto">AK</a>

                </div>
                <hr />
                <div className="flex font-lobster  tracking-wider space-x-3 text-lg justify-center items-center h-16 font-bold md:mx-12 xl:space-x-6 ">
                    <a className="hover:text-red-600" href="#home">Home</a>
                    <a className="hover:text-red-600" href="#about">About</a>
                    <a className="hover:text-red-600" href="#skills">Skills</a>
                    <a className="hover:text-red-600" href="#projects">Projects</a>
                    <a className="hover:text-red-600" href="#contact">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar