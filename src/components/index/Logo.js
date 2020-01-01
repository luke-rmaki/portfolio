import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = () => {
  // Frame number to load in img source
  const [frame, setFrame] = useState(0);

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const currentFrame = useRef(0);

  const animate = () => {
    // Use callback for setState to ensure current state is accurate
    setFrame(() => {
      // If currentFrame is less than or equal to 48, set new state to equal currentFrame. Else set it to 48 (last frame)
      const newState =
        Math.trunc(currentFrame.current) <= 48
          ? Math.trunc(currentFrame.current)
          : 48;
      return newState;
    });
    requestRef.current = requestAnimationFrame(animate);
    currentFrame.current = currentFrame.current + 1;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div>
      <LogoImg
        src={`./vector_frames/frame${frame < 10 ? '0' : ''}${frame}.svg`}
      />
    </div>
  );
};

export default Logo;
