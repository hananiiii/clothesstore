import React from "react";


const Categories =({onSelectCategory }) =>{
    return(
        <section className="md:h-full flex items-center text-gray-700 lg:mt-24 sm:mt-32 mt-32 mb-24 ">
          <div className="container px-8 py-0 mx-auto">
             <div className="text-center mb-24 ">         
                <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold  mb-4">
                  What we have
                </h1>
                <h5 className="text-lg md:text-lg  text-blue-500">
                Discover our various categories 
                </h5>
             </div>
             <div 
           
             className="grid grid-cols-1  lg:grid-cols-3 mx-8 gap-8 justify-center items-center "
           
             >
                  <div 
                      
                  className="w-full cursor-pointer shadow-md p-6 rounded-lg border border-gray-500 hover:bg-slate-50 hover:transform hover:-translate-y-1  transition-transform duration-300"  
                 
                  >
                    <div className="flex flex-row gap-4">
                      <div className=" h-14 w-14  border border-gray-500 rounded-full inline-back p-4  mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                       </svg>

                      </div>
                      <h3 className="text-2xl font-bold text-slate-700  mt-2 ">
                        Men's clothes
                      </h3>
                      </div>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                 
                  <div className="  w-full cursor-pointer shadow-md p-6  rounded-md border border-gray-500 hover:bg-slate-50 hover:transform hover:-translate-y-1  transition-transform duration-300" >
                  <div className="flex flex-row gap-4">
                     <div className=" h-14 w-14  border border-gray-500 rounded-full inline-back p-4  mb-3">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                       </svg>

                      </div>
                     <h3 className="text-2xl font-bold text-slate-700  mt-2 ">Women's clothes</h3>
                     </div>
                     <p  className="text-lg text-gray-400" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="  w-full cursor-pointer shadow-md p-6  rounded-md border border-gray-500 hover:bg-slate-50 hover:transform hover:-translate-y-1  transition-transform duration-300">
                  <div className="flex flex-row gap-4">
                    <div className="h-14 w-14  border border-gray-500 rounded-full inline-back p-4  mb-3">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                       </svg>

                    </div>
                    <h3 className="text-2xl font-bold text-slate-700 mt-2">jewelery </h3>
                    </div>
                    <p  className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
             </div>
           </div>

        </section>
    )
}
export default Categories;