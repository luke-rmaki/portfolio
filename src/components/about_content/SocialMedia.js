import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex } from '../layout';
import { Icon } from '.';
import { createIconLinkObjectArray } from '../../utils';

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      markdownRemark(frontmatter: { name: { eq: "about" } }) {
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
  let { links } = data.markdownRemark.frontmatter;
  links = links.split(',');
  const { edges: icons } = data.allFile;

  const dataArray = createIconLinkObjectArray(icons, links);

  return (
    <Flex
      style={{
        paddingLeft: '25px',
        paddingTop: '10px',
      }}
      flexMobile={'1'}
      widthDesktop={'50%'}
    >
      {dataArray.map(icon => (
        <a
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
          href={icon.link}
        >
          <Icon src={icon.iconURL} />
        </a>
      ))}
    </Flex>
  );
};

export default SocialMedia;
