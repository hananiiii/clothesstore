import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import {Menu ,X} from "lucide-react";


const NavLinks =() =>{
    
    return(
    <div className="flex md:flex-row items-center font-semibold text-lg  flex-col lg:gap-12 gap-4 ">
        <NavLink to="/Home" className=" md:pt-0 text-blue-500 hover:text-blue-300 hover:transform hover:-translate-y-1  transition-transform duration-300 ">Home</NavLink>
        <NavLink to="/Products" className=" md:pt-0 pt-2 text-blue-500 hover:text-blue-300 hover:transform hover:-translate-y-1  transition-transform duration-300">Products</NavLink>
        <NavLink to="/Inspiration" className=" md:pt-0 pt-2 text-blue-500 hover:text-blue-300 hover:transform hover:-translate-y-1  transition-transform duration-300">Inspiration</NavLink>
        <NavLink to="/Contact" className=" md:pt-0 pt-2 text-blue-500 hover:text-blue-300 hover:transform hover:-translate-y-1  transition-transform duration-300">Contact</NavLink>
        <Link to="/Panie"> <button  className=" bg-blue-500 hover:bg-blue-300  w-24 h-10 text-sm font-medium text-white  md:mt-0 mt-2 rounded-sm hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300">
            Go to cart
        </button>
        </Link>
     </div>
    )
}

const Nav =() =>{
    const [isOpen ,setIsOpen] =useState(false);
    const toggleNavbar =() =>{
        setIsOpen(!isOpen);
        
     
       
    }
    return(
     <>
        <nav className="w-1/2.5 flex justify-end ">
          <div className="hidden w-full md:flex justify-between  ">
            <NavLinks />
          </div>
          <div className="md:hidden ">
            <button  onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu/>}
            </button>
          </div>
        </nav>
        {isOpen && (
            <div className="flex flex-col items-center basis-full  mt-10  md:hidden">
                <NavLinks/>
            </div>
        )}
        
     </>
      
    )
}
export default Nav;