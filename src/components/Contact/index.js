import React, { useState } from 'react';



const [formState, setFormState] = useState({ name: '', email: '', message: '' });




function ContactForm() {
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name,e.target.email,e.target.message]: e.target.value })
      }
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    // JSX
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} rows="5" onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
    }
    
    export default ContactForm;