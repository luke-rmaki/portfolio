import styled from 'styled-components';

interface Props {
  color?: string;
  hover?: string;
}

export const MainHeading = styled.h1<Props>`
  font-family: var(--font);
  font-weight: bold;
  font-size: var(--mainheading-size);
  color: ${(props) => (props.color ? `var(--${props.color})` : `var(--white)`)};
  padding: 50px 0 0 25px;
`;

export const SubHeading = styled.h2<Props>`
  font-family: var(--font);
  font-weight: normal;
  font-style: italic;
  font-size: var(--subheading-size);
  color: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--accent)`};

  a {
    font-family: var(--font);
    font-weight: normal;
    font-style: italic;
    font-size: var(--subheading-size);
    color: ${(props) =>
      props.color ? `var(--${props.color})` : `var(--accent)`};
    text-decoration: none;

    &:hover {
      color: ${(props) =>
        props.hover ? `var(--${props.hover})` : `var(--accent)`};
    }
  }
`;

export const Paragraph = styled.p<Props>`
  font-family: var(--font);
  font-size: var(--paragraph-size);
  color: var(--white);
  line-height: 1.7rem;

  a {
    text-decoration: none;
  }
`;

export const Highlight = styled.span<Props>`
  font-family: var(--font);
  font-size: var(--paragraph-size);
  color: var(--main);
`;
