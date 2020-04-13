import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Spacer } from '../layout';
import BlogContent from './BlogContent';
import { MainHeading, Paragraph } from '../typography';
import { Menu } from '../nav';

const Template = ({ data }, props) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <Menu path={props.path} />
      <Spacer heightMobile={180} />
      <MainHeading style={{ paddingLeft: '25px' }}>
        {frontmatter.title}
      </MainHeading>
      <Paragraph
        style={{
          textAlign: 'right',
          paddingRight: '15px',
          fontStyle: 'italic',
        }}
      >
        {frontmatter.date}
      </Paragraph>
      <BlogContent
        style={{
          paddingTop: '50px',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      ></BlogContent>
    </Layout>
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
