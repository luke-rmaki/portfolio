import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Helmet } from 'react-helmet';

import { Hues, Saturation, Lightness } from '../../utils/colors';
import { generateVariantCSS } from '../../utils/generateVariantCSS';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

  :root {
    /* Main colors */
    --purple: hsl(${Hues.Purple}, ${Saturation.Purple}%, ${Lightness.Purple}%);
    --black: hsl(${Hues.Black}, ${Saturation.Black}%, ${Lightness.Black}%);
    --white: hsl(${Hues.White}, ${Saturation.White}%, ${Lightness.White}%);
    --accent: hsl(${Hues.Accent}, ${Saturation.Accent}%, ${Lightness.Accent}%);

    ${generateVariantCSS()}

    --font: 'Fira Code', monospace;

    --mainheading-size: 2.5rem;
    --subheading-size: 1.8rem;
    --paragraph-size: 1.1rem;

    --level-four: 4000;
    --level-three: 3000;
    --level-two: 2000;
    --level-one: 1000;
  
  @media (min-width: 600px) {
    :root {
    --mainheading-size: 3rem;
    --subheading-size: 2.8rem;
    --paragraph-size: 1.25rem;
    }

  }
}

  body {
    max-width: 100vw;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    background: var(--black);

    * {
    box-sizing: border-box;

    &::selection {
      background-color: var(--accent);
      color: var(--black);
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
