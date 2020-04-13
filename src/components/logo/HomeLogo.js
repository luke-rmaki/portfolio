import * as React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Name = styled(animated.h2)`
  font-family: 'Montserrat', sans-serif;
  color: var(--white);
  font-size: 30px;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  @media screen and (max-width: 300px) {
    font-size: 15px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  svg {
    width: 20%;
    max-height: 200px;
  }
`;

const Logo = () => {
  const nameAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      duration: 2000,
      easing: t =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
    },
  });
  const leftAnimation = useSpring({
    transform: 'translateX(10%)',
    from: { transform: 'translateX(100%)' },
    config: {
      duration: 500,
    },
  });
  const rightAnimation = useSpring({
    transform: 'translateX(-10%)',
    from: { transform: 'translateX(-100%)' },
    config: {
      duration: 500,
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
