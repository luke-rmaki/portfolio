import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
  body {
    max-width: 100vw;
    box-sizing: border-box;
    overflow: auto;

    * {
    box-sizing: border-box;
    }
  }

  :root {
    --black: #0A132D;
    --main: #6845E6;
    --main-shade: #7F6EB9;
    --white: #D3D4F4;

    --font: 'Fira Code', monospace;

    --mainheading-size: 2.5rem;
    --subheading-size: 1.8rem;
    --paragraph-size: 1.1rem;
  
  @media (min-width: 500px) {
    :root {
    --mainheading-size: 3rem;
    --subheading-size: 3rem;
    --paragraph-size: 1.25rem;

    }
  }

  }
 `;

const LayoutWrapper = styled.div`
  background-color: #0a132d;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    {children}
  </LayoutWrapper>
);

export default Layout;
