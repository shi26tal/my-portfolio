import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Services from './components/Services'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
