import React, { useState } from "react";
import "./_styles.scss";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleKeyDown = event => {
        if (event.keyCode === 13 && event.shiftKey) {
          handleSubmit(event);
        }
      };

      const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:5000/api/contacts/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // handle successful response here
          console.log('Form data submitted successfully');
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(error => {
          // handle error here
          console.error('There was a problem with the fetch operation:', error);
        });
    };

    return (
        <section className="contactContainer">
            <h1 className="contactTitle">Contact</h1>
            <p className="contactText">
                Feel free to contact me!
            </p>
            <form onSubmit={handleSubmit} className="contactForm">
                <label htmlFor="name" className="contactFormLabel">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="contactFormInput"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email" className="contactFormLabel">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="contactFormInput"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message" className="contactFormLabel">Message: </label>
                <textarea
                    name="message"
                    id="message"
                    className="contactFormTextArea"
                    value={formData.message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    required
                />
                <button type="submit" className="contactFormButton">Submit</button>
            </form>
        </section>
    );
};