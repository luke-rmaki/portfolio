import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

import Logo from '../logo/Logo';
import { LogoSpring } from '../springs';

const MenuList = styled.div`
  display: flex;
  padding: ${props =>
    props.isVisible === true ? '10px 0 50px 0' : '5px 0 25px 0'};
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.isVisible === true ? 'visible' : 'hidden')};
  opacity: ${props => (props.isVisible === true ? 1 : 0)};
  transition: all 0.5s;
  background-color: var(--white);
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1000;

  img {
    position: absolute;
    z-index: -1000;
  }

  ul {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    li {
      padding: 15px 0;
      a {
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        color: var(--black);
        text-decoration: none;

        &:hover {
          color: var(--main);
        }
      }
    }
  }
  /* set menu to horizontal */
  @media screen and (min-width: 800px) {
    margin-bottom: 100px;
    width: 100%;
    height: unset;
    background: none;
    z-index: 200;

    img {
      display: none;
    }
    ul {
      flex-direction: row;
      width: 80%;
      justify-content: space-around;
      li {
        a {
          color: var(--white);
        }
      }
    }
  }
  span {
    color: var(--main);
    font-size: 20px;
    cursor: pointer;
    padding-left: 20px;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Menu = ({ path }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const data = useStaticQuery(graphql`
    query MenuBackgroundQuery {
      file(relativePath: { eq: "logo_white.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <>
      <LogoSpring>
        <Logo
          isVisible={isLogoVisible}
          callback={() => {
            setIsLogoVisible(false);
            setIsMenuVisible(true);
          }}
        />
      </LogoSpring>
      <MenuList isVisible={isMenuVisible}>
        <img src={data.file.publicURL} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: path === '/about/' ? 'none' : 'block' }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ display: path === '/blog/' ? 'none' : 'block' }}>
            <Link to="/blog">Blog</Link>
          </li>
          <li style={{ display: path === '/contact/' ? 'none' : 'block' }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <span
          data-cy="menu-close"
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
