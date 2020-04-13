import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import mediaQueries from '../../utils/mediaQueries';

const ContentWrapper = styled.div`
  padding: 0 25px 50px 25px;
  p {
    font-family: 'Monserrat', sans-serif;
    font-size: 18px;
    color: var(--white);
    ${mediaQueries.typography} {
      font-size: 20px;
    }
  }
`;

const Content = () => {
  const data = useStaticQuery(graphql`
    query AboutContent {
      markdownRemark(frontmatter: { name: { eq: "about" } }) {
        html
      }
    }
  `);
  return (
    <ContentWrapper
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  );
};

export default Content;
