import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import colors from '../../../utils/colors';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @keyframes play60 {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: -40500px 0px;
    }
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
