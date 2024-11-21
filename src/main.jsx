import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Brands from './components/Brands.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'

import Header from './components/Header.jsx'
import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/contacts.scss'
import './styles/footer.scss'
import './styles/Services.scss'
import './styles/mediaquery.scss'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   < Router>
      <Header />
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/#about' element={<About />} /> 
        <Route path='/contact' element={<Contacts />} />
        <Route path='/#brands' element={<Brands />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
      

    
    </Router>

  </StrictMode>
)
