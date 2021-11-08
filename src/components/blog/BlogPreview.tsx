import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Paragraph, SubHeading } from '../Typography';
import { Frontmatter } from '../../utils/types';

type Props = {
  edge: {
    node: {
      excerpt: string;
      frontmatter: Frontmatter;
    };
  };
};
export const BlogPreview = (props: Props) => {
  const { edge } = props;
  return (
    <StyledBlogPreview>
      <Link to={edge.node.frontmatter.path}>
        <section className="excerpt">
          <SubHeading>{edge.node.frontmatter.title}</SubHeading>
          <div className="sub">
            <svg width="100%" height="30px">
              <line x1="50%" x2="50%" y1="0" y2="90%" />
              <line x1="50%" x2="95%" y1="90%" y2="90%" />
            </svg>
            <span>{edge.node.frontmatter?.date}</span>
          </div>
          <Paragraph>{edge.node.excerpt}</Paragraph>
        </section>
        <GatsbyImage
          alt="Blog post header image"
          image={getImage(edge.node.frontmatter.image)}
        />
      </Link>
    </StyledBlogPreview>
  );
};

const StyledBlogPreview = styled.article`
  position: relative;
  margin: 50px 0;
  transition: 0.2s all ease-in;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }

  /* Desktop layout */
  @media (min-width: 1000px) {
    padding: 0 100px;

    a {
      flex-direction: row;
      gap: 50px;

      .excerpt {
        flex: 0 1 50%;
      }
    }
  }

  h2 {
    text-decoration: underline;
    font-style: normal;
    color: var(--white);
    padding: 0 20px;
  }

  .sub {
    display: flex;
    align-items: flex-end;
    height: 30px;
    margin-bottom: 50px;

    span {
      color: var(--white);
      font-family: var(--font);
    }

    svg {
      line {
        stroke: var(--accent);
        stroke-width: 1;
      }
    }
  }

  p {
    padding: 0 20px;
  }

  section {
    margin-bottom: 25px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 0px 6px 4px var(--black-dark-1);
    h2,
    p,
    span {
      color: var(--accent);
    }

    svg > line {
      stroke: var(--white);
    }
  }
`;
