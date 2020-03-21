import React from 'react';
import { useSpring, animated } from 'react-spring';

const HeadingSpring = props => {
  const animation = useSpring({
    from: { transform: 'rotateX(90deg)' },
    to: { transform: 'rotateX(0deg)' },
    delay: 500,
  });

  return <animated.div style={animation}>{props.children}</animated.div>;
};

export default HeadingSpring;
