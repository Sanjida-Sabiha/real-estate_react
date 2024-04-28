import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBanner from './Components/TopBanner/TopBanner';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Summary from './Components/Summary/Summary';
import Propertise from './Components/Propertise/Propertise';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import Apartments from './Components/Apartments/Apartments';
import Testimonial from './Components/Testimonial/Testimonial';
import Aminities from './Components/Aminities/Aminities';
import VideoPlay from './Components/VideoPlay/VideoPlay';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <TopBanner/>
      <About/>
      <Summary/>
      <Propertise/>
      <Services/>
      <Features/>
      <Apartments/>
      <VideoPlay/>
      <Testimonial/>
      <Aminities/>
      <Footer/>
    </>
  )
}

export default App
