import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { createIconLinkObjectArray } from '../../utils';
import { SubHeading } from '..';

export const SocialMedia = () => {
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
    <StyledSocialMedia>
      <SubHeading>Find me on...</SubHeading>
      <ul>
        {dataArray.map((icon) => (
          <li key={icon.name}>
            <a target="_blank" rel="noopener noreferrer" href={icon.link}>
              <Icon src={icon.iconURL} />
            </a>
          </li>
        ))}
      </ul>
    </StyledSocialMedia>
  );
};
export default SocialMedia;

const StyledSocialMedia = styled.aside`
  padding: 25px;
  ul {
    margin: 30px 0 150px 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const Icon = styled.img`
  height: 70px;

  @media (max-width: 500px) {
    height: 35px;
  }
`;
