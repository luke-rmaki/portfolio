import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: absolute;
  min-width: 150px;
  max-width: 200px;
  width: 10%;
  opacity: ${props => (props.isLogoVisible ? '1' : '0')};
  transition: all 0.5s;
  cursor: pointer;
  z-index: 1000;
`;

const Logo = props => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <LogoWrapper isLogoVisible={props.isVisible}>
      <img onClick={props.callback} src={data.file.publicURL} />
    </LogoWrapper>
  );
};

export default Logo;
