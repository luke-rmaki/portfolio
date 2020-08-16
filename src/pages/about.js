import React from 'react';

// Component imports
import Menu from '../components/nav/Menu';
import {
  AboutImage,
  AboutContent,
  SocialMedia,
} from '../components/about_content';
import { Layout, Flex } from '../components/layout';
import { MainHeading, Subheading } from '../components/typography';
import { HeadingSpring } from '../components/springs';
import {
  ImageSpring,
  ContentSpring,
  SocialMediaSpring,
} from '../components/springs/about';

const About = props => (
  <Layout>
    <Menu path={props.path} />
    <HeadingSpring>
      <MainHeading>About</MainHeading>
    </HeadingSpring>
    <Flex style={{ paddingTop: '30px' }}>
      <ContentSpring>
        <AboutContent />
      </ContentSpring>
      <ImageSpring>
        <AboutImage />
      </ImageSpring>
    </Flex>
    <SocialMediaSpring>
      <Subheading style={{ paddingLeft: '25px' }}>Find me on...</Subheading>
      <SocialMedia />
    </SocialMediaSpring>
  </Layout>
);

export default About;
