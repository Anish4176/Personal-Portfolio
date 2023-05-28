import React from 'react'

function Mainsection() {
    return (

        <div id='home' className="bg-hero-pattern bg-no-repeat bg-center bg-cover flex justify-around items-center h-[100vh] xl:justify-start">

            <div className="flex-row  text-white ml-[2rem] md:ml-[13rem]  sm:ml-[8rem]   mx-3 space-y-3  items-start w-full justify-center">

                <h2 className='text-3xl xl:text-5xl md:text-5xl font-bold font-roboto'>Hello, my name is</h2>
                <h1 className='text-5xl xl:text-8xl md:text-7xl font-bold font-sans'><span className='text-red-600'>A</span>nish <span className='text-red-600'>S</span>ingh</h1>
                <div className="wrapper ">
                    <div className="static-text text-[1.8rem] sm:text-[2rem] ">I'm a </div>
                    <ul className="dynamic-text text-left text-[1.5rem] sm:text-[2rem]  ">
                        <li><span>Frontend Developer</span></li>
                        <li><span> Programmer</span></li>
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