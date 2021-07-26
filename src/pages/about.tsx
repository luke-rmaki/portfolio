import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Component imports
import { SocialMedia } from '../components/contact/SocialMedia';
import { Layout } from '../components/global/Layout';
import { Menu } from '../components/global/Menu';
import { MainHeading } from '../components';
import { Projects } from '../components/projects';

const About = (props) => {
  const { path }: { path: string } = props;

  const content = useStaticQuery(graphql`
    query AboutContent {
      mdx(frontmatter: { title: { eq: "about" } }) {
        body
      }
    }
  `);
  return (
    <Layout title="About">
      <Menu path={path} />
      <StyledAbout>
        <MainHeading>About</MainHeading>
        <article>
          <MDXRenderer>{content.mdx.body}</MDXRenderer>
        </article>
        <Projects />
        <hr />
        <SocialMedia />
      </StyledAbout>
    </Layout>
  );
};

export default About;

const StyledAbout = styled.main`
  article {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 2fr;

    p,
    span,
    blockquote {
      line-height: 40px;
    }

    [data-img] {
      grid-column: 1 / 3;
    }

    @media (min-width: 1000px) {
      [data-img] {
        grid-column: 2 / 3;
        justify-self: end;
        align-self: start;
        grid-row: 2 / 5;
      }
    }

    blockquote {
      background: var(--purple);

      a {
        color: var(--accent);
      }

      &:nth-child(2n) {
        background: var(--black);

        a {
          color: var(--white);
        }
      }
    }

    p,
    h2,
    blockquote {
      padding: 20px;
    }

    @media (max-width: 400px) {
      p,
      h2,
      blockquote {
        padding: 10px;
      }
    }

    p,
    blockquote {
      font-family: var(--font);
      font-size: var(--paragraph-size);
      color: var(--white);
      text-indent: 10px;
      margin-bottom: 20px;
      grid-column: 1 / 3;

      strong {
        font-weight: bold;
        font-style: italic;
        color: var(--accent);
      }

      mark {
        background: var(--accent);
        color: var(--black);
      }
    }

    a {
      color: var(--purple);
      text-decoration: none;
    }

    h2 {
      font-family: var(--font);
      font-weight: normal;
      font-style: italic;
      font-size: var(--subheading-size);
      color: var(--purple);
    }
  }

  hr {
    margin: 100px 0;
  }

  @media (min-width: 1000px) {
    article {
      grid-template-columns: 50% 50%;

      p,
      blockquote {
        grid-column: 1 / 2;
      }
    }
  }
`;
