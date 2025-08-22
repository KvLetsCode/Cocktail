import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);
import './App.css'

function App() {
  

  return (
    <>
      <div className='flex-center h-[100vh]'>
        <h1 className='bg-red-100'>Hello</h1>
      </div>
      
    </>
  )
}

export default App
