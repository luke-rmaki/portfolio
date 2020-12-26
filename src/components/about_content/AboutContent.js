import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const ContentWrapper = styled.div`
  padding: 0 25px 50px 25px;
  p {
    font-family: var(--font);
    font-size: var(--paragraph-size);
    color: var(--white);

    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }
  }

  ul {
    color: var(--white);
    font-family: var(--font);
    list-style-type: circle;

    li {
      margin-left: 5px;
    }
  }

  h2 {
    font-family: var(--font);
    font-weight: normal;
    font-style: italic;
    font-size: var(--subheading-size);
    color: ${props => (props.color ? `var(--${props.color})` : 'var(--main)')};
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
