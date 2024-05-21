import React from 'react';
import react from "../images/react-removebg.png"
import css from "../images/css-noBackground.png"
import js from "../images/JS.png"
import html from "../images/html.png"
import ts from "../images/ts-removebg.png"


const About: React.FC = () => {
    return (
        <>
            <div id='about' className='about'>
                <div className='about-images'>
                    
                    <div className='about-circle'>
                        <div className='orbit'>
                            {/* <img className='circle-images-about react' src={react} alt="react" /> */}

                            <div className='circle-images-about react-back'>
                                <img className='react' src={react} alt="react" />
                            </div>

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
                    <p>I'm web developer with a 2 years of experience, passionate about crafting engaging websites. Skilled in HTML, CSS, React.js, Express.js and TypeScript, I thrive in frontend development, but also have a solid grasp of backend basics. My journey in web development is driven by a desire to create seamless, responsive user experiences.</p>
                    <p>I've had the opportunity to work on diverse projects, honing my skills in both collaborative and individual settings. These experiences have sharpened my problem-solving abilities and taught me the value of effective communication within a team.</p>
                    <p>Eager to continue learning and facing new challenges, I look forward to contributing to exciting projects that push the boundaries of web technology.</p>
                </div>
            </div>
        </>
    )
}

export default About;