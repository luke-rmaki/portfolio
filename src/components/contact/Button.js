import React from 'react';

const Button = ({ type, setter }) => {
  if (type === `button`) {
    return <button onClick={() => setter(2)}>&rarr;</button>;
  } else {
    return <input type="submit" name="Submit" />;
  }
};

export default Button;
