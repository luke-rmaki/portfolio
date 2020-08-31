import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoWrapper = styled(motion.div)`
  min-width: ${props => (props.isScrolled ? '100px' : '150px')};
  max-width: 200px;
  width: ${props => (props.isScrolled ? '8%' : '10%')};
  opacity: ${props => (props.isLogoVisible ? '1' : '0')};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  z-index: 1000;
  position: fixed;
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
  // current scroll position
  const [positionTop, setPositionTop] = useState(0);
  // updates isScrolledDown state
  useEffect(() => {
    const updateState = () => {
      // get new scroll position
      const { scrollY } = window;
      // if new scroll position is greater than previous: user has scrolled
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
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.8,
      }}
    >
      <img src={data.file.publicURL} />
    </LogoWrapper>
  );
};

export default Logo;
