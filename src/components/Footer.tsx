import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
    return (
        <footer >
            <div className='footer-elements'>

                <div className='footer-contact'>

                    <div className='footer-phone-email'>
                        <p>Phone: <a href="tel:+19175300224">+1 917 530 0224</a></p>
                        <p>Email: <a href="mailto:garriwebdeveloper@gmail.com">garriwebdeveloper@gmail.com</a></p>
                    </div>
                    

                    <div className='footer-links'>

                        <p>Connect with me:</p>
                        <div>

                            <a href="https://github.com/Snail1227" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            
                            <a href="https://www.linkedin.com/in/garri-shtyrkin-088209205" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            
                        </div>

                    </div>

                </div>

                <p className='lower-font-size'>&copy; Copyright 2024. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;