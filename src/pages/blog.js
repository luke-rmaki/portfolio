import React from 'react';
import { graphql } from 'gatsby';

// Component imports
import { BlogList } from '../components/blog';
import Menu from '../components/global/Menu';
import { Layout, Spacer, Flex } from '../components/global/layout';
import { MainHeading } from '../components/global/typography';
import { HeadingSpring } from '../components/global/springs';

const Blog = (
  {
    data: {
      allMarkdownRemark: { edges },
    },
  },
  props
) => {
  return (
    <Layout>
      <Menu path={props.path} />
      <Spacer heightMobile={150} />
      <HeadingSpring>
        <MainHeading style={{ paddingLeft: '25px' }}>Blog</MainHeading>
      </HeadingSpring>
      <BlogList list={edges} />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { ne: "page" }, path: { ne: null } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            path
            title
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
