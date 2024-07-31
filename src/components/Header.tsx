import React, { useEffect, useState } from 'react';

interface HeaderProps {
  scrollToSection: (section: string) => void;
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, currentSection }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setIsScrolled(offset > 0);

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          console.log(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div>
        <a onClick={() => scrollToSection('home')} href="#home">Home</a>
        <hr style={{ visibility: currentSection === "home" ? 'visible' : 'hidden' }} />
      </div>
      <div>
        <a onClick={() => scrollToSection('about')} href="#about">About me</a>
        <hr style={{ visibility: currentSection === "about" ? 'visible' : 'hidden' }} />
      </div>
      <div>
        <a onClick={() => scrollToSection('work')} href="#works">Works</a>
        <hr style={{ visibility: currentSection === "work" ? 'visible' : 'hidden' }} />
      </div>
    </header>
  );
}

export default Header;
