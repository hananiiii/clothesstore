import React from 'react'
import Header from '../components/Header';
import Modelone from '../assets/model1.jpg';
import Modelthree from '../assets/model2h.jpg'
import Modeltwo from '../assets/model3.jpg'
import Modelfour from '../assets/model4.jpg'
import Modelfive from '../assets/model5.jpg'
import Modelsix from '../assets/model6h.jpg'
import Modelseven from '../assets/model7.jpg'
import Modeleight from '../assets/model8.jpg'
import Modelnine from '../assets/model9.jpg'
import Footer from '../components/Footer';
import samanta from '../assets/samanta-sokolova-SI5ZBvRQDFY-unsplash.jpg';
import Samanta from '../assets/patrick-t-kindt-KIcQzWym6O0-unsplash.jpg';
import rachell from '../assets/dieter-blom-YAHCLVsRUBw-unsplash.jpg';
import Rachell from '../assets/charles-asselin-fRLFAkUTNzE-unsplash.jpg'
const inspirations = () => {
  return (
    <section >
        <Header/>
    <div className='w-full max-w-5xl p-5  pb-10 mx-auto mb-10 gap-5 lg:columns-3 sm:columns-2'>
        <img  src={Modelone} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer
                        '/>
        <img  src={Modeltwo} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer '/>
        <img  src={Modelthree} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Modelfour} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Modelfive} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Modelsix} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Modelseven} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Modeleight} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Modelnine} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={samanta} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Samanta} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={rachell} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
        <img  src={Rachell} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'/>
    </div>
    <Footer/>
    </section>
  )
}

export default inspirations