import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
    return (
        <footer >
            <div className='footer-elements'>
                <p className='lower-font-size'>&copy; Copyright 2024. All right reserved</p>

                <div className='footer-links'>
                    <p>Connect with me:</p>
                    <div>
                        <a href="https://www.instagram.com/snail_1227" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://github.com/Snail1227" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/garri-shtyrkin-088209205" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;