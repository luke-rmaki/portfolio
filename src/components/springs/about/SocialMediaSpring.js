import React from 'react';
import { useSpring, animated } from 'react-spring';

const SocialMediaSpring = props => {
  const animation = useSpring({
    from: { transform: 'translateY(1000%)' },
    to: { transform: 'translateY(0%)' },
    delay: 1100,
  });

  return <animated.div style={animation}>{props.children}</animated.div>;
};

export default SocialMediaSpring;
