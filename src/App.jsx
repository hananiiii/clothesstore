import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/Aboutus.jsx";
import Contact from "./pages/Contact.jsx";
import Join from "./pages/Join.jsx";
import Product from "./pages/Product.jsx";
import Productts from "./pages/Products.jsx";
import Inspirations from "./pages/inspirations.jsx";
import Panie from "./pages/Panie.jsx";

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Join" element={<Join />} />
              <Route path="/products/:id" element={ <Product/>} />
              <Route path="/Products" element={ <Productts/>}/>
              <Route path="/Inspiration" element={ <Inspirations/>}/>
              <Route path="/Panie" element={ <Panie/>}/>
             
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
