import React, { useEffect, useState } from 'react';


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [currentSection, setCurrentSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const offsetX = window.innerWidth;
            const offset = window.pageYOffset;
            console.log(offset)
            setIsScrolled(offset > 0);
    
            if (offsetX >= 1200) {
                if (offset < 1200 && offset > 500) {
                    setCurrentSection('about');
                } else if (offset < 500 && offset !== 0) {
                    setCurrentSection('home');
                } else if (offset > 1200) {
                    setCurrentSection('work');
                } 
            } else if (offsetX < 1200 && offsetX > 750) {
                if (offset < 2150 && offset > 1050) {
                    setCurrentSection('about');
                } else if (offset < 1050 && offset !== 0) {
                    setCurrentSection('home');
                } else if (offset > 2150) {
                    setCurrentSection('work');
                } 
            } else if (offsetX <= 750) {
                if (offset < 2150 && offset > 1050) {
                    setCurrentSection('about');
                } else if (offset < 1050 && offset !== 0) {
                    setCurrentSection('home');
                } else if (offset > 2150) {
                    setCurrentSection('work');
                } 
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