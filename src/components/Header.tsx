import React, { useEffect, useState } from 'react';


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [currentSection, setCurrentSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
        const offset = window.pageYOffset;
        setIsScrolled(offset > 0);
        if (offset > 499 && offset < 1300) {
            setCurrentSection('about');
          }else if (offset === 0) {
            setCurrentSection('home');
          } else if (offset > 1200) {
            setCurrentSection('work');
          } 
        };

        

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={isScrolled ? 'scrolled' : ''}>
            <div>
                <a href="#home">Home</a>
                <hr style={{ visibility: currentSection === "home" ? 'visible' : 'hidden' }}/>
            </div>
            <div>
                <a href="#about">About me</a>
                <hr style={{ visibility: currentSection === "about" ? 'visible' : 'hidden' }}/>
            </div>
            <div>
                <a href="#works">Works</a>
                <hr style={{ visibility: currentSection === "work" ? 'visible' : 'hidden' }}/>
            </div>
            </header>
        </>
    )
}

export default Header;