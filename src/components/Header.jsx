import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";

  const Header = () =>{
   
   return(

     <header className=" bg-white flex-wrap sticky top-0 z-[20] mx-auto flex   w-full  items-center shadow-lg justify-between border-b border-gray-200 p-8">
       <Link to="/Home"> <Logo/></Link>
        <Nav  />
     </header>
   
   )
}
export default Header;