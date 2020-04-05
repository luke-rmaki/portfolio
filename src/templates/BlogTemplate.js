import React from 'react';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <>
      <h1>{frontmatter.title}</h1>
    </>
  );
};

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
    }
  }
`;
