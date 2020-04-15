import React, { useState } from 'react';

import StyledForm from './StyledForm';
import Button from './Button';

const Form = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);
  const [showWarnings, setShowWarnings] = useState(false);

  const handleNext = () => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
      setStep(2);
      setShowWarnings(false);
    } else {
      setShowWarnings(true);
    }
  };

  return (
    <StyledForm step={step}>
      <form
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        name="contact"
      >
        <label style={{ opacity: showWarnings ? 1 : 0 }}>
          Please enter an email address
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="What's your email?"
          name="email"
          required
        />
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Leave a message"
          name="message"
          required
        />
        <Button
          type={step === 1 ? 'button' : 'input'}
          setter={step === 1 ? handleNext : setStep}
        />
      </form>
    </StyledForm>
  );
};

export default Form;
