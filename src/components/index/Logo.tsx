import * as React from 'react';
import styled from 'styled-components';
import { useSpring, useTrail, animated } from 'react-spring';

import colors from '../../utils/colors';

const Name: any = styled(animated.h2)`
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  font-size: 30px;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  @media screen and (max-width: 300px) {
    font-size: 15px;
  }
`;

const LogoWrapper: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  svg {
    width: 20%;
    max-height: 200px;
  }
`;

const Logo: React.FunctionComponent = () => {
  const nameAnimation: React.CSSProperties = useSpring({
    transform: 'translateY(0%)',
    from: { transform: 'translateY(-1000%)' },
    config: {
      duration: 2000,
      easing: t =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
    },
  });
  const leftAnimation: React.CSSProperties = useSpring({
    transform: 'translateX(10%)',
    from: { transform: 'translateX(100%)' },
    config: {
      duration: 1000,
    },
  });
  const rightAnimation: React.CSSProperties = useSpring({
    transform: 'translateX(-10%)',
    from: { transform: 'translateX(-100%)' },
    config: {
      duration: 1000,
    },
  });
  return (
    <LogoWrapper>
      <animated.svg
        width="100%"
        height="100%"
        viewBox="0 0 163 321"
        style={leftAnimation}
      >
        <path
          d="M160.5,2l-158.5,158.5l158.5,158.5"
          style={{ fill: 'none', stroke: '#6845e6', strokeWidth: '4px' }}
        />
      </animated.svg>
      <Name style={nameAnimation}>Luke Ruokaism&#228;ki</Name>
      <animated.svg
        width="100%"
        height="100%"
        viewBox="0 0 163 321"
        style={rightAnimation}
      >
        <path
          d="M2,319l158.5,-158.5l-158.5,-158.5"
          style={{ fill: 'none', stroke: '#6845e6', strokeWidth: '4px' }}
        />
      </animated.svg>
    </LogoWrapper>
  );
};

export default Logo;
