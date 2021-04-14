import React, { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

interface StyledProps {
  isScrolled: boolean;
  isLogoVisible: boolean;
}

const LogoWrapper = styled.div<StyledProps>`
  width: ${(props) => (props.isScrolled ? `80px` : `100px`)};
  opacity: ${(props) => (props.isLogoVisible ? `1` : `0`)};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 200;
  border-radius: 100%;
  box-shadow: 4px 4px 4px #0a132d;
`;

export const Logo = (props) => {
  const { isVisible, callback } = props;

  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo_button.svg" }) {
        publicURL
      }
    }
  `);

  // * State {boolean}: has the page scrolled down
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const previousScrollPosition = useRef(0);

  // * Effect: Update state based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (previousScrollPosition.current < currentScroll) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      previousScrollPosition.current = currentScroll;
    };
    window.addEventListener(`scroll`, handleScroll, { passive: true });

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  });

  return (
    <LogoWrapper
      id="logo-wrapper"
      isLogoVisible={isVisible}
      onClick={callback}
      isScrolled={isScrolledDown}
    >
      <img src={data.file.publicURL} alt="Logo" />
    </LogoWrapper>
  );
};
