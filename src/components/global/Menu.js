import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Logo from './Logo';

const MenuList = styled.div`
  display: flex;
  padding: ${props =>
    props.isVisible === true ? '10px 0 50px 0' : '5px 0 25px 0'};
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isVisible === true ? 1 : 0)};
  transition: all 0.5s;
  ul {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    li {
      padding: 15px 0;
      a {
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        color: var(--white);
        text-decoration: none;
      }
    }
  }
  /* set menu to horizontal */
  @media screen and (min-width: 800px) {
    margin-bottom: 100px;
    ul {
      flex-direction: row;
      width: 80%;
      justify-content: space-around;
    }
  }
  span {
    color: var(--main);
    font-size: 20px;
    cursor: pointer;
    padding-left: 20px;
  }
`;

const Menu = ({ path }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  const data = useStaticQuery(graphql`
    query PageQuery {
      allSitePage {
        distinct(field: path)
        nodes {
          internalComponentName
          path
        }
      }
    }
  `);
  const pages = data.allSitePage.nodes
    .map(node => {
      return {
        path: node.path,
        name: node.internalComponentName.substring(9), // cuts "Component" from the start of internalComponentName
      };
    })
    .filter(page => !page.path.includes('dev')); // removes dev 404 page from menu
  return (
    <>
      <Logo
        isVisible={isLogoVisible}
        callback={() => {
          setIsLogoVisible(false);
          setIsMenuVisible(true);
        }}
      />
      <MenuList isVisible={isMenuVisible}>
        <ul>
          {pages
            .filter(page => page.path !== path)
            .map(page => (
              <li key={page.name}>
                <Link to={page.path}>
                  {page.name === 'Index' ? 'Home' : page.name}
                </Link>
              </li>
            ))}
        </ul>
        <span
          onClick={() => {
            setIsMenuVisible(false);
            setIsLogoVisible(true);
          }}
        >
          X
        </span>
      </MenuList>
    </>
  );
};

export default Menu;
