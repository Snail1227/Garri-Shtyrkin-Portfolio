import React from 'react';
import bookingSystem from '../images/booking-system-screen.png'
import restaurant from '../images/restaurant-demo.png'
import saasWebSite from '../images/saas-website.png'
import portfolio from '../images/portfolio.png'
import website from '../images/website-overview.png'


const Work: React.FC = () => {
    return (
        <div id='works' className='work'>
            <div className='work-form'>
                <div className='sub-title'>   
                    <p className='title'>My Work</p>
                    <hr />
                </div>
                <div className='work-projects'>
                    <div className='project'>
                        <p>Hotel booking system</p>
                        <div className='work-image'>
                            <img src={bookingSystem} alt="bookingSystem" />
                            <a href="https://github.com/Snail1227/hotel-booking">
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <p>Italian Restaurant</p>
                        <div className='work-image'>
                            <img src={restaurant} alt="restaurant" />
                            <a href="https://github.com/Snail1227/hotel-booking">
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <p>Saas Web site</p>
                        <div className='work-image'>
                            <img src={saasWebSite} alt="saas-website" />
                            <div className='two-btn'>
                                <a  href="https://github.com/Snail1227/SaaS-website">
                                    <button className='github-btn'>GitHub</button>
                                </a>
                                <a href="https://saas-website-demo.netlify.app">
                                    <button className='demo-btn'>Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <p>Portfolio</p>
                        <div className='work-image'>
                            <img src={portfolio} alt="portfolio" />
                            <a href="https://github.com/Snail1227/JS-website">
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <p>Web site</p>
                        <div className='work-image'>
                            <img src={website} alt="portfolio" />
                            <a href="https://github.com/Snail1227/project-overview">
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work;