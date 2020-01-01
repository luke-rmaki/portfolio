import React from 'react';
import { useSpring, animated } from 'react-spring';

export const AnimateLeft = props => {
  const animation = useSpring({
    from: { transform: 'translateX(200%)', opacity: 0 },
    to: { transform: 'translatex(0%)', opacity: 1 },
  });
  return <animated.div style={animation}>{props.children}</animated.div>;
};

export const AnimateCenter = props => {
  const animation = useSpring({
    from: { transform: 'translateY(200%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
  });
  return <animated.div style={animation}>{props.children}</animated.div>;
};

export const AnimateRight = props => {
  const animation = useSpring({
    from: { transform: 'translateX(-200%)', opacity: 0 },
    to: { transform: 'translatex(0%)', opacity: 1 },
  });
  return <animated.div style={animation}>{props.children}</animated.div>;
};
