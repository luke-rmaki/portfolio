import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const ImgWrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 70%;

  img {
    border-radius: 10px;

    @media screen and (min-width: 800px) {
      border-radius: 20px;
    }
  }
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);
  return (
    <ImgWrapper>
      <Img fluid={data.file.childImageSharp.fluid} alt="Profile picture" />
    </ImgWrapper>
  );
};

export default Image;
