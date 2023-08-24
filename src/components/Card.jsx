import React from "react";
import { Link } from "react-router-dom";


const Card =({products = []})=>{
    return(
      <section className="md:h-full flex items-center text-gray-700">
          <div className="container px-6 py-24 mx-auto">
             <div className="text-center mb-24">         
                  <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold  mb-4">
                     Recent Products
                  </h1>
                  <h5 className="text-lg md:text-lg text-blue-500">
                   Elevate your style with our latest masterpiece
                  </h5>
             </div>
             <div className="flex flex-wrap -m-4 lg:ml-16 sm:ml-0 ml-8">
                {
                    products.map((product) =>{
                        console.log(product,'product')
                        const{id,title ,Category, price,image} =product;
                        return(
                            <Link to={`/Products/${id}`} className="p-4 sm:w-1/2 lg:w-[450px] w-[350px] ">
                            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden  hover:transform hover:-translate-y-1  transition-transform duration-300">
                                   <img className=" max-w-screen-lg lg:h-72 md:h-48 w-full  object-center object-contain" src={image}  alt={title} />
                                   <div className="p-6">
                                       <h2 className="text-2xl font-bold text-blue-500   mb-2">{Category}</h2>
                                       <h1 className="tetx-2xl font-semibold mb-3">{title}</h1>
                                      
                                       <div className="flex items-center flex-wrap">
                                          <div className="inline-flex items-center text-center  md:mb-2 lg:mb-2 text-2xl font-bold ">
                                            {price}$
                                          </div>
                                       </div>
                                   </div>
                            </div>
                         </Link>
                        )
                    })

                }
                 
             </div>
          </div>
      </section>
    )
}
export default Card;