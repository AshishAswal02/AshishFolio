import { useState } from 'react'
import saske from './assets/saske.jpg'
import naruto from './assets/naruto.jpg'
import Contact from './components/contact'
import Experience from './components/experience'
import About from './components/about'
import Header from './components/header'
import Navbar from './components/navbar'
import Folio from './components/folio'
import Footer from './components/footer'
import Testimonials from './components/testimonials'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/*<Header />
         <Navbar />
        <About />
        <Experience />*/}
        {/* <Folio />  */}
        
         <Contact />
        {/* <Testimonials />
        <Footer /> */}
    </div>
  )
}

export default App
