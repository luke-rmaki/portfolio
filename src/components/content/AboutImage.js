import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const ImgWrapper = styled.div`
  margin: 50px auto;
  width: 70%;

  img {
    border-radius: 100%;

    @media screen and (min-width: 800px) {
      border-radius: 20px;
    }
  }
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
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
      <Img fluid={data.file.childImageSharp.fluid} alt="Me with a camera" />
    </ImgWrapper>
  );
};

export default Image;
