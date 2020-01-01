import React from 'react';
import { Link } from 'gatsby';

// Component imports
import Layout from '../components/styled_components//layout/Layout';
import Wrapper from '../components/styled_components/layout/Wrapper';
import { SubHeadingMobile } from '../components/styled_components//typography/mobile';
import Logo from '../components/index/Logo';

const Home = () => (
  <Layout>
    <Logo />
    <Wrapper absolute={true} position={{ bottom: 150, left: 0 }}>
      <SubHeadingMobile style={{ transform: 'rotate(90deg)' }}>
        <Link to="/about">About</Link>
      </SubHeadingMobile>
      <SubHeadingMobile style={{ transform: 'translateY(100px)' }}>
        <Link to="/blog">Blog</Link>
      </SubHeadingMobile>
      <SubHeadingMobile style={{ transform: 'rotate(270deg)' }}>
        <Link to="/contact">Contact</Link>
      </SubHeadingMobile>
    </Wrapper>
  </Layout>
);

export default Home;
