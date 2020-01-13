import * as React from 'react';
import { Link } from 'gatsby';

// Component imports
import Layout from '../components/styled_components//layout/Layout';
import Wrapper from '../components/styled_components/layout/Wrapper';
import { SubHeading } from '../components/styled_components/typography/type';
import Logo from '../components/index/Logo';

import {
  AnimateLeft,
  AnimateCenter,
  AnimateRight,
} from '../components/index/animations';

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <Logo />
      <Wrapper absolute={true} position={{ bottom: 150, left: 0 }}>
        <AnimateLeft>
          <SubHeading style={{ transform: 'rotate(90deg)' }}>
            <Link to="/about">About</Link>
          </SubHeading>
        </AnimateLeft>
        <AnimateCenter>
          <SubHeading style={{ transform: 'translateY(100px)' }}>
            <Link to="/blog">Blog</Link>
          </SubHeading>
        </AnimateCenter>
        <AnimateRight>
          <SubHeading style={{ transform: 'rotate(270deg)' }}>
            <Link to="/contact">Contact</Link>
          </SubHeading>
        </AnimateRight>
      </Wrapper>
    </Layout>
  );
};

export default Home;
