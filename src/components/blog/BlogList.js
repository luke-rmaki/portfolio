import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import BlogListing from './BlogListing';
import { Subheading, Paragraph } from '../typography';

const BlogListWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;

    > * {
      flex: 1 0 50px;
      padding: 10px;
    }
  }
`;

const BlogList = list => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const listingVariants = {
    mounted: {
      y: 0,
      opacity: 1,
    },
    unmounted: {
      y: '100vh',
      opacity: 0,
    },
  };

  return (
    <BlogListWrapper variants={variants} animate="visible" initial="hidden">
      {list.list.map(edge => (
        <BlogListing
          variants={listingVariants}
          animate="mounted"
          initial="unmounted"
          data-cy="blog-post"
          key={edge.node.frontmatter.path}
        >
          <Link to={edge.node.frontmatter.path}>
            <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
            <div id="excerpt">
              <Subheading>{edge.node.frontmatter.title}</Subheading>
              <Paragraph>{edge.node.excerpt}</Paragraph>
            </div>
          </Link>
        </BlogListing>
      ))}
    </BlogListWrapper>
  );
};

export default BlogList;
