import * as React from 'react';
import { Link } from 'gatsby';

// Component imports
import { Layout } from '../components/global/layout';
import { Subheading } from '../components/global/typography';
import { Logo, Menu, AnimateMenu } from '../components/home/';

const Home = () => {
  return (
    <Layout>
      <Logo />
      <Menu>
        <AnimateMenu direction="left">
          <Subheading style={{ transform: 'rotate(90deg)' }}>
            <Link to="/about">About</Link>
          </Subheading>
        </AnimateMenu>
        <AnimateMenu direction="down">
          <Subheading style={{ transform: 'translateY(100px)' }}>
            <Link to="/blog">Blog</Link>
          </Subheading>
        </AnimateMenu>
        <AnimateMenu direction="right">
          <Subheading style={{ transform: 'rotate(270deg)' }}>
            <Link to="/contact">Contact</Link>
          </Subheading>
        </AnimateMenu>
      </Menu>
    </Layout>
  );
};

export default Home;
