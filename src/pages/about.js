import React from 'react';

// Component imports
import Menu from '../components/global/Menu';
import {
  Image,
  SocialMedia,
  Content,
  ImageContentContainer,
} from '../components/about';
import { Layout } from '../components/global/layout';
import { MainHeading } from '../components/global/typography';

const About = props => (
  <Layout>
    <Menu path={props.path} />
    <MainHeading style={{ paddingLeft: '25px' }}>About</MainHeading>
    <ImageContentContainer>
      <Image />
      <Content />
    </ImageContentContainer>
    <SocialMedia />
  </Layout>
);

export default About;
