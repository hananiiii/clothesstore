import React, { useState } from "react";
import Header from "../components/Header";


const Join =() =>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit =async (e) =>{
        e.preventDefault();
        console.log("First name :" , firstName);
        console.log("Last name :" , lastName);
        console.log("Email :" , email);
        console.log("Password  :" , password);

        setFirstName("");
        setLastName("")
        setEmail("")
        setPassword("")
    };
   
    return(
        <section>
         <Header />
         <div className=" py-12">
         <h4 className="font-bold flex  justify-center lg:text-3xl text-2xl text-gray-700 mb-4 ">Join us</h4>
         <p className="font-normal flex  justify-center text-base text-gray-300 text-center mb-12">
         Join our community and stay connected to be the first to discover our upcoming products and releases.</p>
         <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-8 lg:w-[500px]  sm:w-[500px] w-[350px] mx-auto">
            <div className=" w-full flex flex-row gap-6">
                <input 
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="w-1/2 border py-4 px-4  border-gray-700 text-base font-light text-gray-300 rounded-sm"/>
               <input 
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-1/2 border py-4 px-4  border-gray-700 text-base font-light text-gray-300 rounded-sm"/>
               
            </div>
            <input 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full border border-gray-700 rounded-sm text-base font-light text-gray-300  px-4 py-4"/>
            <input 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full border border-gray-700 rounded-sm text-base font-light text-gray-300  px-4 py-4"/>
           
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-300 rounded-sm text-white font-bold px-4 py-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
              Join</button>
         </form>
         
         <span class="flex mt-10 justify-center  ">
            <a class="text-gray-500 hover:text-gray-700">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-gray-700">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-gray-700">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500 hover:text-gray-700">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
         </div>
        
        </section>
    )
}
export default Join;