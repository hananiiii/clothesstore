import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Dress from '../assets/dress.jpg';

const Panie = () => {
   
    
  return (
    <section>
        <Header/>
        <div className='container mx-auto mt-2'>
            <div className=' flex lg:flex-row flex-col shadow-md my-8'>
                <div className='lg:w-3/4 px-10 py-10 border-r border-b-gray-300 '>
                     <div className='flex justify-between border-b pb-10'>
                        <h1 className='font-semibold text-2xl text-gray-700'>Cart</h1>
                        <h2 className='font-semibold text-2xl text-gray-700'>4 Items</h2>
                     </div>
                     <div className='flex mt-10 mb-5 sm:mx-64 sm:gap-[110px]  lg:mx-[500px] lg:gap-[210px] mx-44 gap-[80px]'>
                        <h3 className='font-medium text-center text-gray-700 text-sm uppercase w-1/5'>Quantity</h3>
                        <h3 className='font-medium text-center text-gray-700 text-sm uppercase w-1/5'>Price</h3>
                        <h3 className='font-medium text-center text-gray-700 text-sm uppercase w-1/5 lg:block sm:block hidden'>Total</h3>
                     </div>
                     <div className='flex items-center -mx-8 px-6 py-2 md:mx-3 md:border md:border-gray-300'>
                            <div className='flex w-2/5 md:px-10'>
                                <div className='w-20 '>
                                   <img src={Dress} className='h-24' alt='' />
                                </div>
                                <div className='flex flex-col justify-between ml-4 flex-grow'>
                                    <span className='font-bold text-xs'>Long Dress</span>
                                    <span className='text-blue-500 text-lg font-semibold'>Zara</span>
                                    <a className='font-semibold  text-red-500 text-lg cursor-pointer'>Delete</a>
                                </div>
                            </div>
                           
                            <span className='text-center w-1/5 font-semibold text-sm'>1</span>
                            <span className='text-center w-1/5 font-semibold text-sm'>100$</span>
                            <span className='lg:block sm:block hidden text-center w-1/5 font-semibold text-sm'>100$</span>
                     </div>
                             <Link to="/Products" className='flex font-semibold gap-2 text-blue-500 text-sm mt-10 cursor-pointer'>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                   </svg>

                                 more products
                             </Link>
                   
                </div>
                <div id="summary" class="lg:w-1/4 px-8 py-10">
                    <h1 className='font-bold text-xl text-gray-700'>Order summary </h1>
                    <div className='mt-10 mb-5 flex justify-between'>
                        <span className='font-semibold text-sm uppercase'>Items 4</span>
                        <span className='font-semibold text-sm uppercase'>590$</span>
                    </div>
                    <div >
                        <label className='font-medium inline-block mb-3 text-sm uppercase'>Shopping</label>
                        <select className='block p-2 text-gray-700 w-full text-sm'>
                            <option>Standart </option>
                            <option>XL </option>
                            <option>M </option>
                            <option>L </option>
                        </select>
                    </div>
                    <div className='py-10'>
                        <label for="promo" className=' font-semibold inline-block mb-3 text-sm uppercase'>Promo Code</label>
                        <input type="text" id="promo" placeholder='Enter your code' class="p-2 text-sm w-full  border border-gray-300"></input>
                    </div>
                    <button className='bg-blue-500 font-medium rounded-sm  text-center hover:bg-blue-300 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer w-full px-5 py-3 text-sm text-white uppercase'>
                        Apply</button>
                     <div className='border-t mt-8'>
                        <div className='flex  text-gray-700 justify-between py-6 uppercase'>
                            <span className='font-bold text-xl text-gray-700'>Total price</span>
                            <span className='font-bold'>600$</span>
                        </div>
                        <button className='bg-blue-500 font-medium rounded-sm  text-center hover:bg-blue-300 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer w-full px-5 py-3 text-sm text-white uppercase'>
                        Chckout</button>
                     </div>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Panie