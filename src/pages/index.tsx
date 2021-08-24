import * as React from 'react';
import styled from 'styled-components';

// Component imports
import { Layout } from '../components/global/Layout';
import { AnimatedLogo } from '../components';
import { HomeLink } from '../components/buttons/HomeLink';

const HomeWrapper = styled.main`
  text-align: center;

  nav {
    width: 100%;
    max-width: 800px;
    padding: 150px 0;
    position: relative;
    display: flex;
    justify-content: space-around;
    margin: auto;
  }
`;

const Home = () => (
  <Layout title="Home">
    <HomeWrapper>
      <AnimatedLogo />
      <nav>
        <HomeLink href="/about">About</HomeLink>
        <HomeLink href="/blog">Blog</HomeLink>
        <HomeLink href="/contact">Contact</HomeLink>
      </nav>
    </HomeWrapper>
  </Layout>
);

export default Home;
