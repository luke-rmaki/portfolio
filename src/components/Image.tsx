import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const ImgWrapper = styled.div`
  margin: 20px auto 0px auto;
  width: 70%;

  img {
    @media screen and (min-width: 800px) {
      border-radius: 20px;
    }
  }
`;

export const Image = () => (
  <ImgWrapper data-img>
    <StaticImage
      src="../assets/images/profile.jpg"
      alt="Me holding a drink at a party"
    />
  </ImgWrapper>
);
