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
import { HeadingSpring } from '../components/global/springs';
import {
  ImageSpring,
  ContentSpring,
  SocialMediaSpring,
} from '../components/global/springs/about';

const About = props => (
  <Layout>
    <Menu path={props.path} />
    <HeadingSpring>
      <MainHeading style={{ paddingLeft: '25px' }}>About</MainHeading>
    </HeadingSpring>
    <ImageContentContainer>
      <ImageSpring>
        <Image />
      </ImageSpring>
      <ContentSpring>
        <Content />
      </ContentSpring>
    </ImageContentContainer>
    <SocialMediaSpring>
      <SocialMedia />
    </SocialMediaSpring>
  </Layout>
);

export default About;
