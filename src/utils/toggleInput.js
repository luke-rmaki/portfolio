const toggleInput = (setEmail, setMessage, step) => {
  const placeholder = step === 1 ? "What's your email?" : 'Leave a message';
  const inputType = step === 1 ? 'email' : 'text';
  const inputSetter = step === 1 ? setEmail : setMessage;

  return {
    placeholder,
    inputType,
    inputSetter,
  };
};

export default toggleInput;
