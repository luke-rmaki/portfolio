import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Logo from './Logo';
import { LogoSpring } from '../global/springs';

const MenuList = styled.div`
  display: flex;
  padding: ${props =>
    props.isVisible === true ? '10px 0 50px 0' : '5px 0 25px 0'};
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.isVisible === true ? 'visible' : 'hidden')};
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
