import * as React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  children: React.ReactNode;
}

export const AnimateLeft: React.FunctionComponent = (props: Props) => {
  const animation: React.CSSProperties = useSpring({
    from: { transform: 'translateX(200%)', opacity: 0 },
    to: { transform: 'translatex(0%)', opacity: 1 },
  });
  return <animated.div style={animation}>{props.children}</animated.div>;
};

export const AnimateCenter: React.FunctionComponent = (props: Props) => {
  const animation: React.CSSProperties = useSpring({
    from: { transform: 'translateY(-400%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
  });
  return <animated.div style={animation}>{props.children}</animated.div>;
};

export const AnimateRight: React.FunctionComponent = (props: Props) => {
  const animation: React.CSSProperties = useSpring({
    from: { transform: 'translateX(-200%)', opacity: 0 },
    to: { transform: 'translatex(0%)', opacity: 1 },
  });
  return <animated.div style={animation}>{props.children}</animated.div>;
};
