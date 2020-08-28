import * as React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

// Component imports
import { Layout } from '../components/layout';
import { Subheading } from '../components/typography';
import { HomeLogo } from '../components/logo/';
import { HomeMenu } from '../components/nav';

const Home = () => {
  return (
    <Layout>
      <HomeLogo />
      <HomeMenu>
        <motion.div
          initial={{
            x: '200%',
            opacity: 0,
            rotate: '0deg',
          }}
          animate={{
            x: '0%',
            opacity: 1,
            rotate: '90deg',
          }}
          transition={{
            delay: 1,
            duration: 0.4,
          }}
        >
          <Subheading>
            <Link to="/about">About</Link>
          </Subheading>
        </motion.div>
        <motion.div
          initial={{
            y: '-400%',
            opacity: 0,
          }}
          animate={{
            y: '100px',
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.4,
          }}
        >
          <Subheading>
            <Link to="/blog">Blog</Link>
          </Subheading>
        </motion.div>
        <motion.div
          initial={{
            x: '-200%',
            opacity: 0,
            rotate: '0deg',
          }}
          animate={{
            x: '0%',
            opacity: 1,
            rotate: '-90deg',
          }}
          transition={{
            delay: 1.2,
            duration: 0.4,
          }}
        >
          <Subheading>
            <Link to="/contact">Contact</Link>
          </Subheading>
        </motion.div>
      </HomeMenu>
    </Layout>
  );
};

export default Home;
