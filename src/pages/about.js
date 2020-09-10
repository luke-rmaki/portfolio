import React from 'react';
import { motion } from 'framer-motion';

// Component imports
import Menu from '../components/nav/Menu';
import {
  AboutImage,
  AboutContent,
  SocialMedia,
} from '../components/about_content';
import { Layout, Flex } from '../components/layout';
import { MainHeading, Subheading } from '../components/typography';

const About = props => (
  <Layout>
    <Menu path={props.path} />
    <MainHeading
      initial={{
        rotateX: '90deg',
      }}
      animate={{
        rotateX: '0deg',
      }}
      transition={{
        duration: 0.5,
      }}
    >
      About
    </MainHeading>
    <Flex style={{ paddingTop: '30px' }}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        <AboutContent />
      </motion.div>
      <motion.div
        initial={{
          rotateX: '90deg',
        }}
        animate={{
          rotateX: '0deg',
        }}
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
      >
        <AboutImage />
      </motion.div>
    </Flex>
    <motion.div
      initial={{
        y: '1000%',
      }}
      animate={{
        y: '0%',
      }}
      transition={{
        delay: 0.5,
        duration: 0.8,
      }}
    >
      <Subheading style={{ paddingLeft: '25px' }}>Find me on...</Subheading>
      <SocialMedia />
    </motion.div>
  </Layout>
);

export default About;
