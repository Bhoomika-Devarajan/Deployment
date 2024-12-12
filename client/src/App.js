import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Properties from './components/properties/Properties';
import Navbar from './components/navbar/Navbar';
import PropertyDetail from './components/propertyDetail/PropertyDetail';
import Newsletter from './components/newsletter/Newsletter';
import PopularProperties from './components/popularProperties/PopularProperties';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated, e.g., check a token in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (

      <div>
        <Routes>
          <Route
            path='/'
            element={
                <>
                  <Navbar />
                  <Hero />
                  <PopularProperties />
                  <FeaturedProperties />
                  <Newsletter />
                  <Footer />
                </>
             }
          />
          <Route
            path='/properties'
            element={
              <>
                <Navbar />
                <Properties />
                <Footer />
              </>
            }
          />
          <Route
            path='/propertyDetail/:id'
            element={
              <>
                <Navbar />
                <PropertyDetail />
                
              </>
            }
          />
          <Route
            path='/about'
            element={
              <>
                <Navbar />
                <About />
                
              </>
            }
          />
          <Route
            path='/contact'
            element={
              <>
                
                <Contact />
                
              </>
            }
          />
           <Route
            path='/faq'
            element={
              <>
                
                <Faq />
                
              </>
            }
          />
          <Route path='/signup' element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/signin' element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
   
  );
}

export default App;
