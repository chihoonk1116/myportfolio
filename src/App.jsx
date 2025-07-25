import Navbar from "./sections/navbar/Navbar"
import Hero from './sections/hero/Hero'       
import AboutMe from './sections/about/AboutMe'
import Projects from "./sections/projects/Projects"
import ProjectSelection from './sections/projectSelection/ProjectSelection'
import Contact from "./sections/contact/Contact"
import Footer from "./components/footer/Footer"



const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutMe/>
      <Projects/>
      <ProjectSelection/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
 