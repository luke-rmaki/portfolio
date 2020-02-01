import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import colors from '../../../utils/colors';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    max-width: 100vw;
  }
 `;

const LayoutWrapper = styled.div`
  background-color: ${colors.black};

  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    {children}
  </LayoutWrapper>
);

export default Layout;
