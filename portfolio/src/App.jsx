import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
   <>
     <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/ContactMe' element={<ContactMe/>}/>
        <Route exact path='/Resume' element={<Resume/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
   </>
  )
}

export default App
