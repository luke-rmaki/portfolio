import * as React from 'react';
import { useSpring, animated } from 'react-spring';

const HomeMenuSpring = props => {
  let animateProperties;
  switch (props.direction) {
    case 'left':
      animateProperties = {
        from: { transform: 'translateX(200%)', opacity: 0 },
        to: { transform: 'translatex(0%)', opacity: 1 },
      };
      break;
    case 'right':
      animateProperties = {
        from: { transform: 'translateX(-200%)', opacity: 0 },
        to: { transform: 'translatex(0%)', opacity: 1 },
      };
      break;
    case 'down':
      animateProperties = {
        from: { transform: 'translateY(-400%)', opacity: 0 },
        to: { transform: 'translateY(0%)', opacity: 1 },
      };
      break;

    default:
      break;
  }
  const animation = useSpring(animateProperties);
  return <animated.div style={animation}>{props.children}</animated.div>;
};

export default HomeMenuSpring;
