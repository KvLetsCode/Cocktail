import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';

function App() {
  

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Cocktail />
      </main>
      
    </>
  )
}

export default App
