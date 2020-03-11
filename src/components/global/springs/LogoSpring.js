import React from 'react';
import { useSpring, animated } from 'react-spring';

const LogoSpring = props => {
  const animation = useSpring({
    from: { transform: 'rotateY(90deg)' },
    to: { transform: 'rotateY(0deg)', position: 'fixed' },
  });

  return <animated.div style={animation}>{props.children}</animated.div>;
};

export default LogoSpring;
