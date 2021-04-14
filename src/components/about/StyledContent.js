import styled from 'styled-components';

const StyledContent = styled.article`
  padding: 0 25px 50px 25px;
  display: grid;
  grid-template-columns: 1fr 2fr;

  /* Desktop layout */

  > * {
    &:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 2;
    }
    &:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 2;
    }
    &:nth-child(4) {
      grid-column: 1 / 2;
      grid-row: 3;
    }
  }

  /* Mobile layout
  @media screen and (max-width: 600px) {
    > * {
      grid-column: 1 / 3 !important;
    }
  } */

  p,
  span {
    line-height: 40px;
  }

  p {
    font-family: var(--font);
    font-size: var(--paragraph-size);
    color: var(--white);
    text-indent: 10px;
    margin-bottom: 20px;

    strong {
      font-weight: bold;
      color: var(--main);
    }
  }

  a {
    color: var(--purple);
    text-decoration: none;
  }

  h2 {
    font-family: var(--font);
    font-weight: normal;
    font-style: italic;
    font-size: var(--subheading-size);
    color: var(--purple);
  }
`;

export default StyledContent;
