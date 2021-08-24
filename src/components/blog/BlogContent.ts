import styled from 'styled-components';

const BlogContent = styled.article`
  padding: 50px 0 150px 0;

  h2,
  h3 {
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

  p {
    font-family: var(--font);
    font-size: 1rem;
    color: var(--white);
    padding: 10px 25px;
    line-height: 1.8rem;

    strong {
      padding: 0;
      background: var(--accent);
      color: var(--black);
    }

    em {
      padding: 0;
    }
  }

  hr {
    margin-top: 40px;
  }

  deckgo-highlight-code {
    margin: 40px 0;
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

  /*  Desktop styles */

  @media (min-width: 1000px) {
    h2,
    h3,
    p,
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
