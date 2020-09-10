import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import BlogListing from './BlogListing';
import { Subheading, Paragraph } from '../typography';

const BlogListWrapper = styled.div`
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
  return (
    <BlogListWrapper>
      {list.list.map(edge => (
        <BlogListing data-cy="blog-post" key={edge.node.frontmatter.path}>
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
