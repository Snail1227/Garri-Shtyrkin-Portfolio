import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Create references for the sections
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  // State to track the current section
  const [currentSection, setCurrentSection] = useState<string>('');

  // Create scroll methods
  const scrollToSection = (section: string) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'work' && workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSection(section);
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} currentSection={currentSection} />
      <div ref={homeRef} id="home">
        <Home />
      </div>
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={workRef} id="work">
        <Work />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
