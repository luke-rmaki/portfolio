import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Component imports
import { AboutLayout, SocialMedia, StyledContent } from '../components/about';
import { Layout, Menu } from '../components/global';
import { MainHeading } from '../components';

const About = (props) => {
  const { path }: { path: string } = props;

  const content = useStaticQuery(graphql`
    query AboutContent {
      mdx(frontmatter: { name: { eq: "about" } }) {
        body
      }
    }
  `);
  return (
    <Layout Wrapper={AboutLayout} title="About">
      <Menu path={path} />
      <MainHeading>About</MainHeading>
      <StyledContent>
        <MDXRenderer>{content.mdx.body}</MDXRenderer>
      </StyledContent>
      <SocialMedia />
    </Layout>
  );
};

export default About;
