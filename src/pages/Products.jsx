import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Categorie from '../components/Categories';


const Products = () => {
    const [Categories,setCategories] =useState([])
    useEffect(() =>{
      const fetchCategories = async () =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data =await response.json()
        console.log(data)
        setCategories(data)
      }
      fetchCategories()
    },[])
 
    if (Categories.length === 0) return <div>Loading....</div>
  return (
    <section>
      <Header/>
      <Categorie />
      <Card products={Categories}/>
      <Footer/>
     </section>
  )
}

export default Products