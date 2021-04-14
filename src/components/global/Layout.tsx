import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Helmet } from 'react-helmet';

import { Hex } from '../../utils';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');


  body {
    max-width: 100vw;
    box-sizing: border-box;
    overflow: auto;
    margin: 0;

    * {
    box-sizing: border-box;
    }

    background: var(--neutral);
  }

  :root {
    --neutral: ${Hex.Neutral};
    --main: ${Hex.Main};
    --main-shade: ${Hex.MainShade};
    --white: ${Hex.White};
    --accent: ${Hex.Accent};

    --font: 'Fira Code', monospace;

    --mainheading-size: 2.5rem;
    --subheading-size: 1.8rem;
    --paragraph-size: 1.1rem;
  
  @media (min-width: 600px) {
    :root {
    --mainheading-size: 3rem;
    --subheading-size: 2.8rem;
    --paragraph-size: 1.25rem;

    }
  }

  }

  /* Scrollbar styled */
  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    background: var(----neutral);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--accent) ;
    border-radius: 6px;
    border: 3px solid var(----neutral);
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: var(--accent) var(--neutral);
  }
 `;

export const Layout = (props) => {
  const {
    children,
    title,
  }: { children: React.ReactNode; title: string } = props;
  return (
    <>
      <Helmet>
        <title>Luke Ruokaismaki | {title}</title>
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  );
};
