import * as React from 'react';
import styled, { createGlobalStyle, StyledComponent } from 'styled-components';
import reset from 'styled-reset';
import colors from '../../../utils/colors';

const GlobalStyle: any = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    max-width: 100vw;
  }
 `;

const LayoutWrapper: StyledComponent<'div', any, {}, never> = styled.div`
  background-color: ${colors.black};

  min-height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent = ({ children }: Props) => (
  <LayoutWrapper>
    <GlobalStyle />
    {children}
  </LayoutWrapper>
);

export default Layout;
