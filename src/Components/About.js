import React from 'react'
import myimg from '../assets/about.jpg'
function About() {

    return (
        // about section 
        <div id='about' className='pt-14 sm:pt-16 md:pt-20 '>

            <div className="flex-row justify-center items-center space-y-3 ">

                <h1 className='text-center text-3xl  md:text-[2.5rem]  mt-6 font-bold font-lobster '><i className="fa-solid fa-user mx-3"></i>About me</h1>
                <hr className='w-1/2 md:w-1/3 mx-auto border-black pb-4 ' />
                <div className="flex-row xl:flex xl:justify-center xl:items-center">
                    {/* img  */}
                    <img src={myimg} className=" h-auto rounded-3xl xl:mx-1  m-4 p-2 w-full mx-auto md:w-1/3  " alt="" />

                    <div>
                        {/* about section in detail */}
                        <div className='mx-auto w-fit'>
                            <p className='p-3   text-xl max-w-2xl mx-auto font-lobster'>I am <span className='text-red-500'>Anish Kumar Singh</span> , a skilled frontend and backend developer.   With expertise in  <span className='text-red-500'> Next.js, Mongodb, and User Authentication System</span>. With proficiency in these ( <span className='text-red-500'> Tailblocks,Bootstrap,Tailwind</span> ) popular front-end frameworks and libraries, I create dynamic and responsive web applications. <span className='hidden md:block'> I create visually appealing and user-friendly interfaces. I excel in backend development using <span className='text-red-500'> Node.js and MongoDB</span>  for robust systems. I also have proficiency in authentication systems and programming languages like <span className='text-red-500'>C++ and JavaScript</span>. Explore my portfolio to see my work and let's collaborate on innovative projects. Reach out to me to discuss opportunities. Let's create something amazing together!</span></p>

                            {/* download resume button  */}
                            <a href="Resume.pdf" download='Resume.pdf'>
                                <button id='skills' className="bg-red-600 hover:bg-red-400 text-white-800 font-bold py-3 px-4 mx-3 rounded inline-flex items-center text-lg text-cyan-50">
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                    <span>Download Resume</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 