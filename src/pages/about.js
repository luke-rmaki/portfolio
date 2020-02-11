import React from 'react';

// Component imports
import Logo from '../components/global/Logo';
import { Image, SocialMedia, Content } from '../components/about';
import { Layout, Spacer } from '../components/global/layout';
import { MainHeading } from '../components/global/typography';

const About = () => (
  <Layout>
    <Logo />
    <Spacer heightMobile={150} breakpoint={1000} heightDesktop={200} />
    <MainHeading style={{ paddingLeft: '25px' }}>About</MainHeading>
    <Image />
    <Content />
    <SocialMedia />
  </Layout>
);

export default About;
