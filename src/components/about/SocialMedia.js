import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Subheading } from '../global/typography';

const createIconLinkObjectArray = (icons, links) => {
  const iconLinkArray = [];
  // create an object containing both the icon and link and push into an array
  icons.forEach(icon => {
    const iconLinkObj = { iconURL: icon.node.publicURL, name: icon.node.name };
    links.forEach(link => {
      if (link.includes(icon.node.name)) {
        iconLinkObj.link = link;
      }
    });
    iconLinkArray.push(iconLinkObj);
  });
  return iconLinkArray;
};

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  padding-bottom: 50px;

  img {
    flex: 0 1;
    height: 50px;
  }

  @media screen and (min-width: 1000px) {
    width: 80%;
    margin: 50px auto 0 auto;
    img {
      height: 80px;
    }
  }
`;

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
    <>
      <Subheading color="main-shade" style={{ paddingLeft: '25px' }}>
        Find me on...
      </Subheading>
      <IconWrapper>
        {dataArray.map(icon => (
          <a
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
            href={icon.link}
          >
            <img src={icon.iconURL} />
          </a>
        ))}
      </IconWrapper>
    </>
  );
};

export default SocialMedia;
