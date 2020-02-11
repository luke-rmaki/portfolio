import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: absolute;
  min-width: 150px;
  max-width: 200px;
  width: 10%;
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <LogoWrapper>
      <img src={data.file.publicURL} />
    </LogoWrapper>
  );
};

export default Logo;
