import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import BlogListing from './BlogListing';
import { SubHeading, Paragraph } from '..';

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

const BlogList = (list) => (
  <BlogListWrapper>
    {list.list.map((edge) => (
      <BlogListing key={edge.node.frontmatter.path} data-cy="blog-post">
        <Link to={edge.node.frontmatter.path}>
          <StaticImage
            src={edge.node.frontmatter.image.childImageSharp.fluid}
          />
          <div id="excerpt">
            <SubHeading>{edge.node.frontmatter.title}</SubHeading>
            <Paragraph>{edge.node.excerpt}</Paragraph>
          </div>
        </Link>
      </BlogListing>
    ))}
  </BlogListWrapper>
);

export default BlogList;
