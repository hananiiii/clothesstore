import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Whyus from "../components/Whyus.jsx";
import Slides from "../components/Slides.jsx";
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";

export default function(){
    const [products,setProducts] =useState([])
    useEffect(() =>{
      const fetchProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products?limit=9')
        const data =await response.json()
        console.log(data)
        setProducts(data)
      }
      fetchProducts()
    },[])



    return(
        <>
         <Header showButton={true}/> 
         <Hero />
         <Categories/>
         {
            products.length > 0 ?
            <Card products={products}/>
            :<div>Loading .....</div>
         }
         <Slides/>
         <Whyus/>
         <Footer/>
         
        
        </>
       
    )
}