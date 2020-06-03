import styled from 'styled-components';

const BlogContent = styled.div`
  * {
    padding: 0 25px;

    @media screen and (min-width: 800px) {
      padding: 0 100px;
    }
  }
  h2 {
    font-family: var(--font);
    font-weight: normal;
    font-style: italic;
    font-size: 30px;
    color: var(--main);
  }

  p {
    font-family: var(--font);
    font-size: 18px;
    color: var(--white);
    padding: 10px 25px;
  }

  /* Image and caption container */
  figure {
    padding: 0;

    img {
      padding: 0;
    }

    figcaption {
      text-align: center;
      color: var(--main-shade);
      font-family: var(--font);
    }
  }
`;

export default BlogContent;
