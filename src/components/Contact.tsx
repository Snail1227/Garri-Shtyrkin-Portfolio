import React from 'react';
import { Element } from 'react-scroll';


const Contact: React.FC = () => {


const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const data = {
        name: form.get('name'),
        email: form.get('email'),
        message: form.get('message'),
    };

    try {
        const response = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Email sent successfully');
        } else {
            console.error('Failed to send email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
};



    
    return (

        <Element name="contactSection" className="element">
            <div className='contact' id="contact">
            <form onSubmit={handleSubmit} className='contact-form' name="contactForm">
                <div className='sub-title'>
                    <p className='title'>Tell me about your project</p>
                    <hr />
                </div>

                <div className='contact-info'>
                    <input name="name" placeholder='Full Name' type="text" />
                    <input name="email" placeholder='Email Address' type="text" />
                </div>

                <textarea name="message" placeholder='Message description' ></textarea>

                <div>
                    <button type="submit">Send</button> 
                </div>
            </form>
        </div>
        
      </Element>
        
    )
}

export default Contact;