import React, { useEffect, useState } from 'react'

import Header from '../components/Header';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';


 const Product = () => {
    const { id } =useParams();
    const [product,setProduct] =useState({})
    console.log(id,'id',product);
    
    
    useEffect(() => {
      const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      }
      fetchProduct()
    }, []);

    
   const [amount , setAmount] =useState(1)
    
    
    if( Object.keys(product).length == 0) return <div>Object Not found</div>
  
  
  return ( 
   
    <section>
         <Header/>
   
  <div className='max-w-7xl mx-auto p-8'>
   
    <div className='flex flex-col justify-between lg:flex-row gap-4 lg:items-start'>
          <div className='flex flex-col gap-6 lg:w-[40%]  sm:w-[75%] sm:mx-16 sm:my-2  '>
            <img src={product?.image} alt={product?.title} className=' object-contain w-full h-full aspect-square  rounded-xl' />
             
            {/*....<div className='flex flex-row justify-between h-24  '>   
             <img src={images.Shoestwo} alt="" className='w-20 h-20 rounded-md cursor-pointer border border-gray-300 ' onClick={() => setActiveImg(images.Shoestwo)} />   
             <img src={images.Shoesthree} alt="" className='w-20 h-20 rounded-md cursor-pointer  border border-gray-300' onClick={() => setActiveImg(images.Shoesthree)} />   
             <img src={images.Shoesfoor} alt="" className='w-20 h-20 rounded-md cursor-pointer  border border-gray-300'  onClick={() => setActiveImg(images.Shoesfoor)}/>   
             <img src={images.Shoesfive} alt="" className='w-20 h-20 rounded-md cursor-pointer  border border-gray-300'  onClick={() => setActiveImg(images.Shoesfive)}/>   
              
            </div> 
            */}
            

            </div>
            <div className='flex flex-col gap-4 lg:w-2/4 lg:mt-4'>
                <div>
                    <span className='text-blue-500 font-semibold mb-2 tracking-widest uppercase '>{product?.category}</span>
                    <h1 className='text-3xl font-bold text-gray-700'>{product?.title}</h1>
                </div> 
                <div className='flex mb-4 gap-2'>
                  <span className='flex items-center gap-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                     </svg>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                     </svg>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                     </svg>
                     <span className='text-gray-700 font-semibold text-xl'>Review</span>
                  </span>  
                </div>
                <p className='text-gray-700 '>
                  {product?.description}
                </p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>38</option>
                <option>37</option>
                <option>36</option>
                <option>35</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
                </div>
                <h6 className='text-2xl font-semibold'>
                     {amount === 1 ? `${product?.price}$` : `${product?.price * amount}$`}
                </h6> 

                <div className='flex lg:flex-row sm:flex-row flex-col items-start gap-12'>
                   <div className='flex flex-row items-center '>
                    <button className='bg-blue-300 py-1 px-3 rounded-lg text-white text-3xl hover:bg-blue-500 hover:text-white ' onClick={()=>setAmount((prev) => prev - 1)}>-</button>
                    <span className='py-4 px-6 rounded-lg'>{amount}</span>
                    <button className='bg-blue-300 py-1 px-3 rounded-lg text-white text-3xl hover:bg-blue-500 hover:text-white' onClick={()=>setAmount((prev) =>prev+1)}>+</button>
                   </div>
                   <div className='flex gap-4'>
                   <button className='bg-blue-300 text-white hover:bg-blue-500 hover:text-white   font-semibold py-4 px-8 rounded-xl h-full'>
                   Buy it now
                   </button>
                   <Link to='/Panie'><button className='border border-blue-300 hover:bg-blue-500 hover:text-white text-blue-300 font-semibold py-4 px-8 rounded-xl h-full'>
                    Add to Cart
                   </button>
                   </Link>
                   </div>
                </div>
            </div>
          
    </div>
    
  </div>
  <Footer/>
  </section>
  )
}
export default Product;
