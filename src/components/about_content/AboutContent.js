import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const ContentWrapper = styled.div`
  padding: 0 25px 50px 25px;
  p {
    font-family: var(--font);
    font-size: var(--paragraph-size);
    color: var(--white);
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
