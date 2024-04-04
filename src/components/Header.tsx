import React, { useEffect, useState } from 'react';


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const offset = window.pageYOffset;
        setIsScrolled(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <header className={isScrolled ? 'scrolled' : ''}>
                <a href="#home">Home</a>
                <a href="#about">About me</a>
                <a href="#works">Works</a>
            </header>
        </>
    )
}

export default Header;