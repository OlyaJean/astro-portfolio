import Introduction from "./Components/Introduction"
import Passion from "./Components/Passion"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import { useState } from "react"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"


function App() {
  const [active,setActive] = useState(false);
  const [ufo,setUfo] = useState(false)

  return (
    <div>
   
    <Navbar active = {active} setActive={setActive}/>
    {active? <Introduction/> : ""}
    {active?<section className="md:flex gap-5 md:w-[90vw] mx-auto">
    <Skills/>
    <Passion ufo={ufo} setUfo={setUfo}/>
    </section> : ''}
   {ufo? <Projects/> : ""}
   {ufo? <Contact/> : ""}
  
   
    </div>
  )
}

export default App
