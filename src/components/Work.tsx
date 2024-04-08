import React from 'react';
import bookingSystem from '../images/booking-system-screen.png'


const Work: React.FC = () => {
    return (
        <div className='work'>
            <div className='work-form'>
                <div className='sub-title'>   
                    <p className='title'>My Work</p>
                    <hr />
                </div>
                <div className='work-projects'>
                    <div className='project'>
                        <p>Booking system page</p>
                        <div className='work-image'>
                            <img src={bookingSystem} alt="bookingSystem" />
                            <button>GitHub</button>
                        </div>
                    </div>
                    <div className='project'>
                        <p>Ecommerce Landing page</p>
                        <div className='work-image'></div>
                    </div>
                    <div className='project'>
                        <p>Ecommerce Landing page</p>
                        <div className='work-image'></div>
                    </div>
                    <div className='project'>
                        <p>Ecommerce Landing page</p>
                        <div className='work-image'></div>
                    </div>
                    <div className='project'>
                        <p>Ecommerce Landing page</p>
                        <div className='work-image'></div>
                    </div>
                    <div className='project'>
                        <p>Ecommerce Landing page</p>
                        <div className='work-image'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work;