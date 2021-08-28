import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router';

import StyledForm from './StyledForm';
import Button from './Button';

const Form = () => {
  const [email, setEmail] = useState(``);
  const [message, setMessage] = useState(``);
  const [step, setStep] = useState(1);
  const [showWarnings, setShowWarnings] = useState(false);

  const handleNext = () => {
    // eslint-disable-next-line no-useless-escape
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
      setStep(2);
      setShowWarnings(false);
    } else {
      setShowWarnings(true);
    }
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join(`&`);
  }

  async function formSubmit(e) {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch(`/`, {
        method: `POST`,
        headers: { 'Content-Type': `application/x-www-form-urlencoded` },
        body: encode({
          'form-name': `contact`,
          email,
          message,
        }),
      });
      window.location.href = `/success`;
    } catch (err) {
      navigate(`404`);
    }
  }

  return (
    <StyledForm step={step}>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success/"
        onSubmit={(e) => formSubmit(e)}
      >
        <label htmlFor="email" style={{ opacity: showWarnings ? 1 : 0 }}>
          Please enter an email address
        </label>
        <input type="hidden" name="form-name" value="contact" />
        <span>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="What's your email?"
            name="email"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a message"
            name="message"
            required
          />
          <Button
            type={step === 1 ? `button` : `input`}
            setter={step === 1 ? handleNext : setStep}
          />
        </span>
      </form>
    </StyledForm>
  );
};

export default Form;
