import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, Menu } from '../global';
import BlogContent from './BlogContent';
import { MainHeading, Paragraph } from '..';

const Template = ({ data }, props) => {
  const { frontmatter, post } = data.mdx;
  return (
    <Layout>
      <Menu path={props.path} />
      <MainHeading>{frontmatter.title}</MainHeading>
      <Paragraph
        style={{
          textAlign: `right`,
          paddingRight: `15px`,
          fontStyle: `italic`,
        }}
      >
        {frontmatter.date}
      </Paragraph>
      <BlogContent
        style={{
          paddingTop: `50px`,
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </BlogContent>
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
    }
  }
`;
