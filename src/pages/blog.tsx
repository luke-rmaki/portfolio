import React from 'react';
import { graphql } from 'gatsby';

// Component imports
import { BlogList } from '../components/blog/BlogList';
import { Layout } from '../components/global/Layout';
import { Menu } from '../components/global/Menu';

import { MainHeading } from '../components';
import { BlogOverviewData } from '../utils/types';

type Props = {
  path: string;
  data: BlogOverviewData;
};

const Blog = (props: Props) => {
  const { path } = props;

  const {
    data: {
      allMdx: { edges },
    },
  } = props;

  return (
    <Layout title="Blog">
      <Menu path={path} />
      <MainHeading>Blog</MainHeading>
      <BlogList list={edges} />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { ne: "page" }, path: { ne: null } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;
