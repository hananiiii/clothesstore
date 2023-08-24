import React from "react";
import Heroo from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero =() =>{
    return (
        <section id="hero" className="py-0">
           <div className="container flex flex-wrap  items-center justify-center mx-auto mt-20 md:px-32 md:flex-row">
               <div className="mb-14 lg:mb-0 lg:w-1/2 ">
                  <h1 className="max-w-xl text-[2.7rem] leading-16 text-gray-700 font-black font-sans text-center sm:text-5xl text-3xl lg:text-left sm:leading-tight mb-5">
                    Elevate Your Style with our Premium Collection of <span className="text-blue-500 font-black font-sans text-center sm:text-5xl  text-3xl lg:text-left sm:leading-tight ">Trendsetting Clothing –</span> Where Fashion Meets Passion.
                  </h1>
                  <p className="max-w-xl  text-center text-gray-400 lg:text-left md:max-w-md  lg:text-lg md:text-md text-md ">
                  "Discover Your Signature Look with our Exquisite Range of Fashion Essentials – Unleash Your Inner Trendsetter Today!"
                  </p>
                  <div className="flex justify-center gap-8 mt-8 lg:justify-start">
                     <Link to="/Join"><button type="button" className="text-white  bg-blue-500 font-medium w-32 rounded-sm px-5 py-4 text-center hover:bg-blue-300 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
                        Join Us
                     </button>
                     </Link>
                     <Link to="/About"><button type="button" className=" border border-lg border-blue-500 w-32 px-5 py-4 text-center rounded-sm hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer ">
                       About us
                     </button>
                     </Link>
                  </div>
               </div>
               <div className="lg:w-1/2">
                  <img className="lg:ml-[150px] ml-auto md:w-[450px] md:h-[500px] w-[350px] h-[400px] rounded-lg" src={Heroo} alt=""/>
               </div>

           </div>
        </section>
    )
}
export default Hero;