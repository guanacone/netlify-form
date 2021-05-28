import React, { useState } from 'react';
import { navigate } from 'gatsby';

const ContactForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <>
      <h1>Contact Form</h1>
      <form
        name='contact-us'
        method='POST'
        action='/thank-you'
        onSubmit={handleSubmit}
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        <div>
          <input
            type='text'
            id='text-input'
            name='name'
            onChange={handleChange}
            required
          />
          <label htmlFor='text-input'>Name / Alias</label>
        </div>
        <div>
          <input
            id='email-input'
            type='email'
            name='email'
            placeholder=''
            onChange={handleChange}
            required
          />
          <label htmlFor='email-input'>Email</label>
        </div>
        <div>
          <textarea
            id='textarea'
            type='text'
            name='message'
            onChange={handleChange}
            required
          />
          <label htmlFor='textarea'>Message</label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
