import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    max-width: 100vw;
    box-sizing: border-box;

    * {
    box-sizing: border-box;
    }
  }

  :root {
    --black: #0A132D;
    --main: #6845E6;
    --main-shade: #7F6EB9;
    --white: #D3D4F4;
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
