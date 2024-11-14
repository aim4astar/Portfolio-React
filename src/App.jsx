import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '/public/assets/bootstrap/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutMe from './AboutMe';
import Testimonials from "./Testimonials";
import Services from "./Services";
import ContactMe from "./ContactMe";
import Landing from './Landing';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div style={{ marginBottom: 60 }}></div>
          <div>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/about-me' element={<AboutMe />}></Route>
                <Route path='/testimonials' element={<Testimonials />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/contact-me' element={<ContactMe />}></Route>
                <Route path='*' element={<p>Page not found! :/</p>}></Route>
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
