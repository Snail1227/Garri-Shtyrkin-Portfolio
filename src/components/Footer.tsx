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
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;