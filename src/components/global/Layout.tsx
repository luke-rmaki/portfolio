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

  ul.bullet {
    li {
      list-style-type: none;
      &::before {
        content: "=> ";
      }
    }
  }

  hr {
    width: 100vw;
    color: var(--accent);
  }
  /* Util classes */
  .padding {
    padding: 20px;
  }

  .padding-inline {
    padding: 0 20px;
  }

  .highlight {
    color: var(--black);
    background: var(--accent);
  }
}


  /* Scrollbar styled */
  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    background: var(----purple);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--accent) ;
    border-radius: 6px;
    border: 3px solid var(----purple);
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: var(--accent) var(--purple);
  }
  `;

type Props = {
  children: React.ReactNode;
  title: string;
};
export const Layout = (props: Props) => {
  const { children, title } = props;

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
