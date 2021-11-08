import styled from 'styled-components';

const BlogContent = styled.article`
  padding: 50px 0 150px 0;

  h2,
  h3,
  h4 {
    font-family: var(--font);
    padding: 0 25px;
  }

  h2 {
    font-weight: normal;
    font-style: italic;
    font-size: 1.8rem;
    color: var(--accent);
    margin: 50px 0 20px 0;
  }

  h3 {
    color: var(--purple-light-2);
    font-size: 1.3rem;
    margin: 50px 0 0 0;
  }

  h4 {
    color: var(--white);
    font-size: 1.1rem;
    margin-top: 25px;
    font-style: italic;
  }

  p,
  ul {
    font-family: var(--font);
    color: var(--white);
    font-size: 1rem;
    padding: 10px 25px;
    line-height: 1.8rem;

    strong {
      padding: 0;
      background: var(--accent);
      color: var(--black);
    }

    em {
      padding: 0;
      font-style: italic;
    }
  }

  hr {
    margin-top: 40px;
  }

  deckgo-highlight-code {
    margin: 40px 0;
  }

  .mermaid {
    text-align: center;

    // subgraphs background
    .clusters {
      rect {
        fill: var(--purple) !important;
      }
      .nodeLabel {
        display: none !important;
      }
    }

    // line labels
    .edgeLabels {
      span.edgeLabel {
        background: var(--purple) !important;
        color: var(--white) !important;
      }
    }
  }

  blockquote {
    background: var(--purple);
    margin: 10px 0;
  }

  /* Image and caption container */
  figure {
    padding: 0;

    img {
      padding: 0;
    }

    figcaption {
      text-align: center;
      color: var(--purple-light-1);
      font-family: var(--font);
      font-size: 0.8rem;
    }
  }

  ul {
    line-height: 2.6rem;
    text-indent: -25px;
    margin-left: 23px;
    li {
      font-family: var(--font);
      list-style-type: none;
      color: var(--white);
      &::before {
        content: '=> ';
      }
    }
  }
  /*  Desktop styles */

  @media (min-width: 1000px) {
    h2,
    h3,
    h4,
    p,
    ul,
    blockquote {
      padding: 0 100px;
    }

    blockquote {
      margin: 40px 0;
      p {
        padding: 30px 0;
      }
    }

    deckgo-highlight-code {
      width: 80vw;
      margin: 50px auto;
    }
  }
`;

export default BlogContent;
