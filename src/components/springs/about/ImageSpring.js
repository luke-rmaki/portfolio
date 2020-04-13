import React from 'react';
import { useSpring, animated } from 'react-spring';

const ImageSpring = props => {
  const animation = useSpring({
    from: { transform: 'rotateX(90deg)', width: '100%' },
    to: { transform: 'rotateX(0deg)' },
    delay: 700,
  });

  return <animated.div style={animation}>{props.children}</animated.div>;
};

export default ImageSpring;
