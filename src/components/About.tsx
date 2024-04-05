import React from 'react';
import react from "../images/react-removebg.png"
import css from "../images/css-noBackground.png"
import js from "../images/JS.png"
import html from "../images/html.png"
import ts from "../images/ts-removebg.png"


const About: React.FC = () => {
    return (
        <>
            <div className='about'>
                <div className='about-images'>
                    
                    <div className='about-circle'>
                        <div className='orbit'>
                            <img className='react' src={react} alt="react" />

                            <div className='circle-images-about css-back'>
                                <img className='css' src={css} alt="css" />
                            </div>

                            <div className='circle-images-about js-back'>
                                <img className='js' src={js} alt="js" />
                            </div>

                            <div className='circle-images-about html-back'>
                                <img className='html' src={html} alt="html" />
                            </div>

                            <div className='circle-images-about ts-back'>
                                <img className='ts' src={ts} alt="ts" />
                            </div>
                        </div>
                    </div>
                    <div className='about-tagline'>
                        <h1>Sleep & Eat</h1>
                        <h1>Code</h1>
                    </div>
                </div>
                <div className='about-me'>
                    <p>About Me</p>
                    <hr />
                    <p>My passion for building websites started since 2023 and since then i have helped companies around the world build amazing websites and products that create real value for the business and users.</p>
                    <p>I enjoy solving problems with clean scalable solutions and I also have a genuine passion for inspiring design.</p>
                    <p>I am a fullstack developer focusing on core frontend and backend technologies which include HTML, CSS, Javascript, React and other core languages.</p>

                </div>
            </div>
        </>
    )
}

export default About;