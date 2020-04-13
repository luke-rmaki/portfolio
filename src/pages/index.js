import * as React from 'react';
import { Link } from 'gatsby';

// Component imports
import { Layout } from '../components/layout';
import { Subheading } from '../components/typography';
import { HomeLogo } from '../components/logo/';
import { HomeMenu } from '../components/nav';
import { HomeMenuSpring } from '../components/springs';

const Home = () => {
  return (
    <Layout>
      <HomeLogo />
      <HomeMenu>
        <HomeMenuSpring direction="left">
          <Subheading style={{ transform: 'rotate(90deg)' }}>
            <Link to="/about">About</Link>
          </Subheading>
        </HomeMenuSpring>
        <HomeMenuSpring direction="down">
          <Subheading style={{ transform: 'translateY(100px)' }}>
            <Link to="/blog">Blog</Link>
          </Subheading>
        </HomeMenuSpring>
        <HomeMenuSpring direction="right">
          <Subheading style={{ transform: 'rotate(270deg)' }}>
            <Link to="/contact">Contact</Link>
          </Subheading>
        </HomeMenuSpring>
      </HomeMenu>
    </Layout>
  );
};

export default Home;
