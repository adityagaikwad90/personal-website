import { useState } from 'react'
// App.jsx
import Navbar from './Navbar.jsx';
import Home from './Home.jsx'
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contacts from './Contacts.jsx';
import './App.css' // Scoped styles
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
      <Navbar />
     <section id="home" data-aos="fade-up"><Home/></section>
      <section id="about" data-aos="fade-right"><About/></section>
      <section id="projects" data-aos="zoom-in"><Projects/></section>
      <section id="skills" data-aos="flip-up"><Skills/></section>
      <section id="contact" data-aos="fade-left"><Contacts/></section>
    </>
  )
}

export default App
