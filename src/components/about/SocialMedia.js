import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { createIconLinkObjectArray } from '../../utils';
import { SubHeading } from '..';

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      mdx(frontmatter: { name: { eq: "about" } }) {
        frontmatter {
          links
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "icons" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  let { links } = data.mdx.frontmatter;
  links = links.split(`,`);
  const { edges: icons } = data.allFile;

  const dataArray = createIconLinkObjectArray(icons, links);

  return (
    <SocialMediaWrapper>
      <SubHeading>Find me on...</SubHeading>
      <div>
        {dataArray.map((icon) => (
          <a
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
            href={icon.link}
          >
            <Icon src={icon.iconURL} />
          </a>
        ))}
      </div>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;

const SocialMediaWrapper = styled.aside`
  width: 100%;

  h2 {
    margin: 0 0 10px 0;
    padding: 0 0 0 25px;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;

const Icon = styled.img`
  height: 70px;

  @media screen and (min-width: 800px) {
    height: 100px;
  }
`;
