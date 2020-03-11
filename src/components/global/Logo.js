import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  min-width: ${props => (props.isScrolled ? '100px' : '150px')};
  max-width: 200px;
  width: ${props => (props.isScrolled ? '8%' : '10%')};
  opacity: ${props => (props.isLogoVisible ? '1' : '0')};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

const Logo = props => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [positionTop, setPositionTop] = useState(0);
  useEffect(() => {
    const updateState = () => {
      const { scrollY } = window;
      if (scrollY > positionTop) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      setPositionTop(scrollY);
    };
    window.addEventListener('scroll', updateState);
  }, []);
  return (
    <LogoWrapper
      id="logo-wrapper"
      isLogoVisible={props.isVisible}
      onClick={props.callback}
      isScrolled={isScrolledDown}
    >
      <img src={data.file.publicURL} />
    </LogoWrapper>
  );
};

export default Logo;
