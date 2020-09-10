import React from 'react';
import { graphql } from 'gatsby';

// Component imports
import { BlogList } from '../components/blog';
import { Menu } from '../components/nav/';
import { Layout } from '../components/layout';
import { MainHeading } from '../components//typography';

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
      <MainHeading
        initial={{
          rotateX: '90deg',
        }}
        animate={{
          rotateX: '0deg',
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Blog
      </MainHeading>
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
