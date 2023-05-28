import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
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
            <div className="border-2 border-gray-600 max-w-md font-lobster bg-slate-200 hover:bg-slate-300 rounded-md  p-5 flex-row mx-3">
               {/* PROJECT-1  */}
               <img src={Project1} alt="project1" />
               <h1 className='  text-3xl px-3 mt-8 font-bold font-lobster'>Notehub-Your notes on the Cloud</h1>
               <p className='p-3 font-serif text-lg'>Notehub is a powerful and intuitive note-taking website designed to revolutionize the way you capture, organize, and access your important thoughts and ideas. With its sleek interface and robust functionality, Notehub makes it effortless to store and retrieve your notes.</p>
               <a href='https://github.com/Anish4176/Notehub' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4 mx-2 rounded">Source code</a>
            </div>

            {/* PROJECT-2  */}
            <div className="border-2 border-gray-600 max-w-md bg-slate-200 hover:bg-slate-300 rounded-md  p-5 flex-row mx-3">
               <img src={Project2} alt="project1" />
               <h1 className='  text-3xl px-3 mt-8 font-bold font-lobster'>Weather Website</h1>
               <p className='p-3 font-serif text-lg'>With the latest weather API integration, it provides accurate and up-to-date weather information , so you can plan your day accordingly. And with its sleek and modern design, featuring Bootstrap and custom CSS, HTML, and JS, the website is not only functional, but visually stunning as well.</p>
               <a href='https://github.com/Anish4176/weather-project' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4 mx-2 rounded">Source code</a>
            </div>

            {/* PROJECT-3  */}
            <div className="border-2 border-gray-600  max-w-md bg-slate-200 hover:bg-slate-300 rounded-md  p-5 flex-row mx-3">
               <img src={Project3} alt="project1" />
               <h1 className='  text-3xl px-3 mt-8 font-bold font-lobster'>To-Do List</h1>
               <p className='p-3 font-serif text-lg'>It is a cutting-edge task management website designed to help you stay organized, productive, and on top of your daily responsibilities. With its user-friendly interface and robust features, It simplifies the process of managing your to-do list and ensures that no task falls through the cracks.</p>
               <a href='https://github.com/Anish4176/To-Do-List' target='_blank' className="bg-red-600  hover:bg-red-400 text-white font-bold py-2 px-4 mx-2  rounded">Source code</a>
            </div>
         </div>
      </div>
   )
}

export default Projects