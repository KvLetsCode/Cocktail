import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        
      </main>
      
    </>
  )
}

export default App
