import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { ContentSpring } from '../springs/about';
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

const BlogListing = styled.div`
  position: relative;
  margin: 20px 0;

  div#excerpt {
    overflow: hidden;
    h2 {
      font-size: 2rem;
      padding-bottom: 20px;
    }
    p {
      font-size: 1rem;
    }
    background-color: rgba(211, 212, 244, 0.5);
    position: absolute;
    bottom: 0;
    height: 150px;
    color: var(--black);
    margin: auto;
    padding: 10px;
  }
`;

const BlogList = list => {
  return (
    <BlogListWrapper>
      {list.list.map(edge => (
        <ContentSpring key={edge.node.frontmatter.path}>
          <BlogListing>
            <Link to={edge.node.frontmatter.path}>
              <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
              <div id="excerpt">
                <Subheading>{edge.node.frontmatter.title}</Subheading>
                <Paragraph>{edge.node.excerpt}</Paragraph>
              </div>
            </Link>
          </BlogListing>
        </ContentSpring>
      ))}
    </BlogListWrapper>
  );
};

export default BlogList;
