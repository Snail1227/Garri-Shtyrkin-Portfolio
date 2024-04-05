import React, { useState } from "react";
import { Element } from "react-scroll";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    if (name && email && message) { 
        try {
            const formDataParams = new URLSearchParams();
            formData.forEach((value, key) => {
                formDataParams.append(key, value.toString());
            });
  
            const response = await fetch('/', {
              method: 'POST',
              body: formDataParams,
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
      
            if (response.ok) {
              toast('Success! Your message has been sent.');
              reset();
            } else {
              toast('Error sending message. Please try again.');
            }
          } catch (error) {
            toast('Error sending message. Please try again.');
          }
    } else {
        toast('Please fill out all fields.');
    }
  };

  return (
    <Element name="contactSection" className="element">
      <div className="contact" id="contact">
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          name="contactForm"
          data-netlify="true"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <div className="sub-title">
            <p className="title">Tell me about your project</p>
            <hr />
          </div>

          <div className="contact-info">
            <input
              value={name}
              name="name"
              placeholder="Full Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={email}
              name="email"
              placeholder="Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            value={message}
            name="message"
            placeholder="Message description"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div>
            <button type="submit">Send</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </Element>
  );
};

export default Contact;
