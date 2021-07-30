import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { Layout } from '../global/Layout';
import { Menu } from '../global/Menu';
import BlogContent from './BlogContent';
import { MainHeading, Paragraph } from '..';

const Template = (props) => {
  const {
    data: { mdx },
    path,
  } = props;

  deckDeckGoHighlightElement();

  return (
    <Layout title={mdx.frontmatter.title}>
      <Menu path={path} />
      <MainHeading>{mdx.frontmatter.title}</MainHeading>
      <Paragraph
        style={{
          textAlign: `right`,
          paddingRight: `20px`,
          fontStyle: `italic`,
          marginTop: `20px`,
        }}
      >
        {mdx.frontmatter.date}
      </Paragraph>
      <BlogContent>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </BlogContent>
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query ($path: String!) {
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
