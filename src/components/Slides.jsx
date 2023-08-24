import React from "react";
import { Link } from "react-router-dom";
import Modelone from "../assets/modelone.jpg";
import Modeltwo from "../assets/modeltwo.jpg";
import Modelfour from "../assets/modelfour.jpeg";
import Modelfive from "../assets/model.jpg";
import Carousel from "./Carousel";


const slides =[
   
    Modelfour,
    Modelfive,
    Modelone,
    Modeltwo,
    
  
]

export default function Slides(){
    return(
        <div className="text-center mt-16 ">         
        <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold  mb-4">
         Inspiration
        </h1>
        <h5 className="text-lg md:text-lg  text-blue-500">
        Unleash your inner fashionista with our diverse range of style inspirations 
        </h5>
    
           <div className="flex flex-row gap-16 lg:w-1/2">
         <Carousel >
         {slides.map((s)=>(
         <img src={s} />
         ))}
         </Carousel>
         
       </div>
       <div className="lg:w-1/2">
        <div className=" lg:flex lg:flex-col gap-12 lg:ml-[800px] lg:-mt-[400px] ml-[150px] lg:w-[450px] lg:h-[500px] hidden  ">
        <h1 className="lg:text-start text-center font-lg text-xl ">
        Embark on a captivating journey of style exploration,
         where our curated inspirations become your canvas for
          self-expression. From timeless classics to cutting-edge
           trends, our diverse collection sparks your imagination
            and empowers you to embrace fashion as an art form,
             making every outfit a masterpiece of your unique identity.
        </h1>
         <div className="w-[130px] h-[50px] bg-blue-500 hover:bg-blue-300  ">
        <Link to ='/Inspiration'><button type="button" className="  hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer 
                        rounded-sm  px-4 py-3 text-white font-semibold text-base items-center">
                View More
           
        </button>
        </Link >
        
        </div>
            

     
         </div>
           

         </div>
       </div>
       
    )
}

