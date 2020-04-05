import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;

    * {
      flex: 1 0;
    }
  }
`;

const BlogListing = styled.div`
  position: relative;
  margin: 20px 0;

  div#excerpt {
    background-color: rgba(211, 212, 244, 0.5);
    position: absolute;
    bottom: 0;
    height: 100px;
    color: var(--black);
    margin: auto;
    padding: 10px;
  }
`;

const BlogList = list => {
  console.log(list);
  return (
    <BlogListWrapper>
      {list.list.map(edge => (
        <BlogListing key={edge.node.frontmatter.path}>
          <Link to={edge.node.frontmatter.path}>
            <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
            <div id="excerpt">{edge.node.excerpt}</div>
          </Link>
        </BlogListing>
      ))}
    </BlogListWrapper>
  );
};

export default BlogList;
