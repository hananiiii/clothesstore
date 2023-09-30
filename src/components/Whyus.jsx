import React from "react";


const Whyus =() =>{
    return(
        <section className="md:h-full flex items-center text-gray-700 lg:mt-12 sm:mt-32 mt-32 ">
          <div className="container px-5 py-0 mx-auto">
             <div className="text-center mb-24">         
                <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold  mb-4">
                   Why us
                </h1>
                <h5 className="text-lg md:text-lg  text-blue-500">
                Discover a seamless shopping journey whith us 
                </h5>
             </div>
             <div className="grid grid-cols-1  lg:grid-cols-3 px-8 gap-8 justify-center items-center ">
                  <div className="w-full  shadow-md p-6 rounded-lg border border-gray-500 hover:bg-slate-50 hover:transform hover:-translate-y-1  transition-transform duration-300">
                    <div className="flex flex-row gap-4">
                      <div className=" h-14 w-14  border border-gray-500 rounded-full inline-back p-4  mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                      </div>
                      <h3 className="text-2xl font-bold text-slate-700  mt-2 ">
                        New Arrival
                      </h3>
                      </div>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="  w-full shadow-md p-6  rounded-md border border-gray-500 hover:bg-slate-50 hover:transform hover:-translate-y-1  transition-transform duration-300" >
                  <div className="flex flex-row gap-4">
                     <div className=" h-14 w-14  border border-gray-500 rounded-full inline-back p-4  mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                         </svg>

                      </div>
                     <h3 className="text-2xl font-bold text-slate-700  mt-2 ">Secure Payment</h3>
                     </div>
                     <p  className="text-lg text-gray-400" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="  w-full shadow-md p-6  rounded-md border border-gray-500 hover:bg-slate-50 hover:transform hover:-translate-y-1  transition-transform duration-300">
                  <div className="flex flex-row gap-4">
                    <div className="h-14 w-14  border border-gray-500 rounded-full inline-back p-4  mb-3">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                       </svg>

                    </div>
                    <h3 className="text-2xl font-bold text-slate-700 mt-2">Style Inspiration</h3>
                    </div>
                    <p  className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
             </div>
           </div>

        </section>
    )
}
export default Whyus;