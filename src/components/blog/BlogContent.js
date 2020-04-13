import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const BlogContent = styled.div`
  * {
    padding: 0 25px;

    @media screen and (min-width: 800px) {
      padding: 0 100px;
    }
  }
  h2 {
    font-family: 'Monserrat', sans-serif;
    font-weight: normal;
    font-style: italic;
    font-size: 30px;
    color: var(--main);

    ${mediaQueries.typography} {
      font-size: 48px;
    }
  }

  p {
    font-family: 'Monserrat', sans-serif;
    font-size: 18px;
    color: var(--white);
    padding: 10px 25px;

    ${mediaQueries.typography} {
      padding: 30px 100px;
      font-size: 20px;
    }
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
      font-family: 'Monserrat', sans-serif;
    }
  }
`;

export default BlogContent;
