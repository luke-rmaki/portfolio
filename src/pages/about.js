import React from 'react';

// Component imports
import Layout from '../components/styled_components/layout/Layout';
import PageWrapper from '../components/about/PageWrapper';
import {
  HeadingWrapper,
  ImageWrapper,
  SocialMediaWrapper,
} from '../components/about/componentWrappers';
import Logo from '../components/Logo';
import Image from '../components/about/Image';
import SocialMedia from '../components/about/SocialMedia';
import { MainHeading } from '../components/styled_components/typography/type';

const About = () => (
  <Layout>
    <Logo />
    <PageWrapper>
      <HeadingWrapper>
        <MainHeading>About</MainHeading>
      </HeadingWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <SocialMediaWrapper>
        <SocialMedia />
      </SocialMediaWrapper>
    </PageWrapper>
  </Layout>
);

export default About;
