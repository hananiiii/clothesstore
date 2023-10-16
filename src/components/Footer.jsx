import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer =() =>{
    return(
        <footer className="text-gray-700 bg-white shadow-lg border-b border-gray-500 p-8 mt-32">
             <div className="md:flex  md:justify-between md:items-center sm:px-12 px-4 py-7 bg-white  justify-between border-t border-gray-200 shadow-inherit p-8">
                <div className="flex flex-col gap-6">
                <h1 className="lg:text-4xl text-3xl md:mb-0  lg:leading-normal  font-semibold  ">
                    <span className="text-blue-500 font-black mx-2">
                    Here 
                    </span>
                     to change your style
                </h1>  
                <p className="max-w-xl  text-center sm:text-start text-gray-400 lg:text-left md:max-w-md  lg:text-lg md:text-md text-md mb-16 ">
                  Be in the know! Enter your email to receive updates on new arrivals, exclusive offers, and the latest fashion trends delivered straight to your inbox.
                </p>
                </div>
                <div>
                    <input 
                    type="text"
                    placeholder="Email"
                    className="sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4  py-2.5 rounded px-2 border border-gray-500 focus:outline-none" />
                    <button className="lg:w-auto sm:w-auto w-full bg-blue-500 hover:bg-blue-300 px-5 py-2.5 rounded-md text-white  hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300">
                          Send
                    </button>

                </div> 
             </div>
             <ItemsContainer/>

        </footer>
    )

}
export default Footer;