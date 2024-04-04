import React, { useState } from "react";
import { Element } from "react-scroll";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Element name="contactSection" className="element">
      <div className="contact" id="contact">
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          name="contactForm"
        >
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
              type="text"
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
      </div>
    </Element>
  );
};

export default Contact;
