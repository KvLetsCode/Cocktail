import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';


function App() {
  

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Cocktail />
        <About />
        <Art />
        <Menu />
        <Contact />
      </main>
      
    </>
  )
}

export default App
