import React from 'react'

const Skills = () => {
   return (
      <div className="bg-black text-white flex-row space-y-4 pb-20">
         <h1 className='text-center  text-3xl   md:text-[2.5rem] font-lobster mt-24 font-bold pt-12'>My Skills</h1>
         <hr className='w-1/2 md:w-1/3 mx-auto ' />

         <div className="card-container flex flex-wrap space-y-4 py-4 justify-center items-center  ">
            <div></div>
            <div className="bg-gray-700 rounded-lg max-w-md max-h-md hover:bg-red-600   p-3 flex-row mx-5 ">
               <h1 className='  text-3xl px-2 mt-6 font-bold '>Front-end Development</h1>
               <p className='p-2 font-serif text-lg  '> I have experience in frontend development, which involves creating the visual and interactive parts of a website or application. I am proficient in HTML, CSS, and JavaScript, and I can utilize frameworks like Next.js to develop responsive and user-friendly interfaces.</p>
            </div>
            <div className="bg-gray-700 rounded-lg max-w-md max-h-md hover:bg-red-600  p-3 flex-row mx-5 ">
               <h1 className='  text-3xl px-2 mt-6 font-bold '>Back-end Development</h1>
               <p className='p-2 font-serif text-lg '>I have knowledge of backend development, which involves building the server-side logic and functionalities of a web application. I am familiar with server-side technologies like Node.js and Express.js, which allow me to handle requests and perform database operations.</p>
            </div>
            <div className="bg-gray-700 rounded-lg max-w-md max-h-md hover:bg-red-600   p-3 flex-row mx-5 ">
               <h1 className='  text-3xl px-2 mt-6 font-bold '>Databases and Programming Languages</h1>
               <p id='projects' className='p-2 font-serif text-lg '>I have experience working with databases (e.g., MongoDB). I can design and create efficient database schemas, write queries, and handle data storage.I possess a good understanding of Javascript and C++.</p>
            </div>
         </div>
      </div>
   )
}

export default Skills