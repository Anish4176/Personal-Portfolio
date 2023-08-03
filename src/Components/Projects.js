import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project4 from '../assets/Project4.png'
const Projects = () => {
   return (
      <div className=" flex-row space-y-4">

         <h1 className='text-center  text-3xl   md:text-[2.5rem] font-lobster mt-12 font-bold pt-12'>My Projects</h1>
         <hr className='w-1/2 md:w-1/3 mx-auto border-black ' />
         <h1 className='text-xl  font-bold mx-auto text-center text-orange-500 p-1'><i className="fa-regular fa-hand-point-right mx-2"></i>Visit my
            <a href='https://github.com/Anish4176' target='_blank' className=" text-blue-500 font-bold mx-2 ">
               <i className=" fa-brands fa-github" ></i>    Github</a>
            to see all Projects!</h1>

         {/* All projects  */}
         <div className="card-container flex flex-wrap space-y-4 py-1  justify-center items-center">
            <div></div>
            {/* PROJECT-3  */}
            <div className="border-2 border-gray-600  max-w-md bg-slate-200 hover:bg-slate-300 rounded-md  p-5 flex-row mx-3">
               <img src={Project4} alt="project1" />
               <h1 className='  text-xl px-2 mt-5 font-bold font-lobster'>Techwearonline - An E-commerce Website 🛍️</h1>
               <p className='pb-3 px-2 font-serif text-lg'>Join Techwearonline, where technology and fashion converge seamlessly. Shop with ease, style, and confidence today! I have used nextjs and mongodb for database which makes is more faster and scalable.</p>
               <a href='https://ecommerce-website-steel-two.vercel.app/' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4 mx-2  rounded">Website Link</a>
            </div>
            <div className="border-2 border-gray-600 max-w-md font-lobster bg-slate-200 hover:bg-slate-300 rounded-md  p-5 flex-row mx-3">
               {/* PROJECT-1  */}
               <img src={Project1} alt="project1" />
               <h1 className='  text-xl px-2 mt-5 font-bold font-lobster'>Notehub - Your Personal notes on the Cloud</h1>
               <p className='pb-3 px-2 font-serif text-lg'>Notehub is a powerful and intuitive note-taking website designed to revolutionize the way you capture, organize, and access your important thoughts and ideas. With its sleek interface and robust functionality.</p>
               <a href='https://github.com/Anish4176/Notehub' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4 mx-2 rounded">Source code</a>
            </div>

            {/* PROJECT-2  */}
            <div className="border-2 border-gray-600 max-w-md bg-slate-200 hover:bg-slate-300 rounded-md  p-5 flex-row mx-3">
               <img src={Project2} alt="project1" />
               <h1 className='  text-xl px-2 mt-5 font-bold font-lobster'>Weather Website</h1>
               <p className='pb-3 px-2 font-serif text-lg'>With the latest weather API integration, it provides accurate and up-to-date weather information , so you can plan your day accordingly. And with its sleek and modern design, featuring Bootstrap and custom CSS, HTML, and JS, the website is fully functional.</p>
               <a href='https://github.com/Anish4176/weather-project' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4 mx-2 rounded">Source code</a>
            </div>

         </div>
      </div>
   )
}

export default Projects