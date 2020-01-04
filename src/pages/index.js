import React from 'react';
import { Link } from 'gatsby';

// Component imports
import Layout from '../components/styled_components//layout/Layout';
import Wrapper from '../components/styled_components/layout/Wrapper';
import { SubHeadingMobile } from '../components/styled_components//typography/mobile';
import Logo from '../components/index/Logo';

import {
  AnimateLeft,
  AnimateCenter,
  AnimateRight,
} from '../components/index/animations';

const Home = () => {
  return (
    <Layout>
      <Logo />
      <Wrapper absolute={true} position={{ bottom: 150, left: 0 }}>
        <AnimateLeft>
          <SubHeadingMobile style={{ transform: 'rotate(90deg)' }}>
            <Link to="/about">About</Link>
          </SubHeadingMobile>
        </AnimateLeft>
        <AnimateCenter>
          <SubHeadingMobile style={{ transform: 'translateY(100px)' }}>
            <Link to="/blog">Blog</Link>
          </SubHeadingMobile>
        </AnimateCenter>
        <AnimateRight>
          <SubHeadingMobile style={{ transform: 'rotate(270deg)' }}>
            <Link to="/contact">Contact</Link>
          </SubHeadingMobile>
        </AnimateRight>
      </Wrapper>
    </Layout>
  );
};

export default Home;
