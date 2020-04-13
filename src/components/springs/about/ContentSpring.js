import React from 'react';
import { useSpring, animated } from 'react-spring';

const ContentSpring = props => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 900,
  });

  return <animated.div style={animation}>{props.children}</animated.div>;
};

export default ContentSpring;
