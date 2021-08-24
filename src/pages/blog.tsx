import React from 'react';
import { graphql, Link } from 'gatsby';

// Component imports
import { BlogList } from '../components/blog/BlogList';
import { Layout } from '../components/global/Layout';
import { Menu } from '../components/global/Menu';

import { MainHeading, Paragraph } from '../components';
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
      <Paragraph className="padding">
        These are a collection of articles about Web Development and Web
        Development related topics. This a largely a place to collect tidbits of
        knowledge and explain things to consolidate them in my own mind.
        Hopefully it can be of some use to you. If you find any errors or have
        any suggestions, please email me at{` `}
        <a className="highlight" href="mailto:luke@rmaki.com.au">
          luke@rmaki.com.au
        </a>
        {` `}
        or message me on anyone of the social media platforms on the{` `}
        <Link className="highlight" to="/about">
          About
        </Link>
        {` `}
        page.
      </Paragraph>
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
