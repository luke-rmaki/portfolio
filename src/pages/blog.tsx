import React from 'react';
import { graphql } from 'gatsby';

// Component imports
import { BlogList } from '../components/blog';
import { Layout, Menu } from '../components/global';
import { MainHeading } from '../components';

const Blog = (
  {
    data: {
      allMdx: { edges },
    },
  },
  props
) => {
  const { path }: { path: string } = props;
  return (
    <Layout>
      <Menu path={path} />
      <MainHeading>Blog</MainHeading>
      <BlogList list={edges} />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { title: { ne: "about" }, path: { ne: null } } }
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
