import React from "react";
import Header from "../components/Header";
import Abouttwo from "../assets/Component.png";
import { Link } from "react-router-dom";
const Aboutus =()=>{
    return(
        <section>
            <Header/>
            <div className=" container flex flex-wrap  items-center justify-center mx-auto lg:mt-20 mt-12 md:px-32 md:flex-row">
                <div className="lg:w-1/2 lg:py-12 py-0 ml-12 lg:ml-0  mb-10 lg:mb-0 ">
                    <img src={Abouttwo} alt="about" className="w-[90%] rounded-sm "/>
                  
                </div>
                <div className=" lg:w-1/2 lg:mt-8 ">
                    <h1 className=" lg:text-4xl text-3xl lg:mx-12  leading-normal lg:text-start text-center mb-8 ">
                        <span className="text-blue-500 underline">Classy</span> Most trust online clothes <br/> website
                    </h1>
                    <p className="lg:w-[75%]  font-normal text-lg  text-gray-700 w-[70%] lg:ml-12 ml-20  mt-4 lg:mt-8 lg:text-start text-center mb-8 ">
                    At <span className="text-blue-500 font-bold"> Classy</span>, we're dedicated to bringing you the 
                    latest fashion trends and wardrobe essentials.
                     Our mission is to provide you with high-quality
                      clothing and accessories that not only make you
                       look good but feel confident. With a keen eye 
                       for style and a passion for customer satisfaction,
                        we're here to make your fashion journey extraordinary."
                    </p>
                    <Link to="/products"><button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 lg:mx-12 md:mx-52 mx-[35%] rounded-sm over:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer 
                         flex items-center">
                          View products
                               <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                   className="w-6 h-6 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                   stroke-width="1.5"
                                   stroke="currentColor"
                                      >
                                     <path
                                      strokeLinecap="round"
                                        strokeLinejoin="round"
                                         d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                         />
                                 </svg>
                               
                    </button>
                    </Link>
                                <br></br>
                                <br></br>
                                <br></br>

                </div>
                

            </div>
           
        </section>
    )
}
export default Aboutus