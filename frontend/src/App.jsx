import React from 'react'
import Footer from './components/Footer'


import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import FeedbackCarousel from './components/FeedbackCarousel'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Experience from './components/Experience'
import Connect from './components/Connect'
import ResumeSection from './components/ResumeSection'
import StatsSection from './components/StatsSection'


const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    {/* <ResumeSection/> */}
    <Education/>
<Skills/>
<Projects/>
<Experience/>
<Certifications/>
<Achievements/>
<FeedbackCarousel/>
<Connect/>
<Footer/>
    </>
  )
}

export default App
