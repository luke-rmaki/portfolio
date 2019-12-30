import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
