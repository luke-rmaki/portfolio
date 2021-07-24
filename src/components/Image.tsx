import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const ImgWrapper = styled.div`
  margin: 20px auto 0px auto;

  @media (min-width: 1000px) {
    margin: 0;
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
