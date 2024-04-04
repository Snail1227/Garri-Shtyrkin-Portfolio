import React from 'react';
import { Element } from 'react-scroll';


const Contact: React.FC = () => {


    
    return (

        <Element name="contactSection" className="element">
            <div className='contact' id="contact">
            <form className='contact-form'>
                <div className='sub-title'>
                    <p className='title'>Tell me about your project</p>
                    <hr />
                </div>

                <div className='contact-info'>
                    <input placeholder='Full Name' type="text" />
                    <input placeholder='Email Address' type="text" />
                </div>

                <textarea placeholder='Message description' ></textarea>

                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
        
      </Element>
        
    )
}

export default Contact;