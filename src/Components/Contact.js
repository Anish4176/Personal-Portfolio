import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [hidden, sethidden] = useState('hidden');
    const[error, seterror] = useState('hidden');
    //handling email messages
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wnsd34b', 'template_dzifi0j', form.current, '4Y5hRb8-bmj6ppGFC')
            .then((result) => {
                console.log(result.text);
                e.target.value="";
                sethidden('');
                setTimeout(() => {
                    sethidden('hidden');
                }, 4000);
                
                // alert('Message sent successfully');
            }, (error) => {
                console.log(error.text);
                seterror('');
                setTimeout(() => {
                    seterror('hidden');
                }, 4000);
            });
    };
    return (
        <div id='contact' className="bg-black text-white flex-row space-y-4">
            <h1 className='text-center  text-3xl   md:text-[2.5rem] font-lobster mt-24 font-bold pt-12'><i className="fa-solid fa-phone  h-4 w-12  m-2 "></i>Contact Me</h1>
            <hr className='w-1/2 md:w-1/4 mx-auto ' />


            <div className="card-container flex flex-wrap space-y-4 py-4 mx-3 justify-center items-center">
                <div className="form">
                    <h1 className='  text-xl  font-bold font-lobster'>Message me</h1>

                    {/* message form  */}
                    <form className=" shadow-md rounded pt-6 pb-8 mb-4" ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="user_name" placeholder="Enter Your Name"required />
                        </div>
                        <div className="mb-6">
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="email" placeholder="Enter your Email" name="user_email"required />
                            <p className="text-green-500 text-xs italic">We will never share your Email with anyone.</p>
                        </div>
                        <div className="mb-6">
                            <textarea name="message" id="message" cols="40" className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline' rows="2" placeholder="Message..." required></textarea>
                        </div>
                         
                        <p className={`text-green-500 text-2xl italic ${hidden} mb-2`}>Message Sent Successfully!</p>
                        <p className={`text-red-500 text-2xl italic ${error} mb-2`}>Something went wrong!</p>
                        <div className="flex items-center justify-between">
                            <button type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact